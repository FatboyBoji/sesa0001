// A script to reset the admin user password
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.production
const envFile = path.join(__dirname, '.env.production');
const envContent = fs.readFileSync(envFile, 'utf8');
const envVars = envContent.split('\n').reduce((acc, line) => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    acc[match[1]] = match[2];
  }
  return acc;
}, {});

console.log('Using database configuration:');
console.log({
  host: envVars.DB_HOST,
  port: envVars.DB_PORT,
  database: envVars.DB_NAME,
  user: envVars.DB_USER
});

// Database connection using production settings
const pool = new Pool({
  host: envVars.DB_HOST || '178.254.12.86',
  port: parseInt(envVars.DB_PORT || '5000'),
  database: envVars.DB_NAME || 'postgres',
  user: envVars.DB_USER || 'u0155',
  password: envVars.DB_PASSWORD || 'YcROFGC9lu'
});

// Set up event handlers for the pool
pool.on('connect', () => {
  console.log('Connected to database successfully');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

async function resetAdminPassword() {
  let client = null;
  
  try {
    console.log('Acquiring client from pool...');
    client = await pool.connect();
    console.log('Database client acquired successfully');
    
    // Generate hash for 'admin123'
    const plainPassword = 'admin123';
    const saltRounds = 10;
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    
    console.log('Generated password hash:', hash);
    
    // Check if admin user exists
    console.log('Checking if admin user exists...');
    const checkResult = await client.query('SELECT * FROM users WHERE username = $1', ['admin']);
    
    if (checkResult.rows.length > 0) {
      // Update existing admin user
      console.log('Admin user exists, updating password...');
      await client.query(
        'UPDATE users SET password_hash = $1 WHERE username = $2',
        [hash, 'admin']
      );
      console.log('Admin user password updated successfully');
    } else {
      // Create new admin user
      console.log('Admin user does not exist, creating new user...');
      await client.query(
        'INSERT INTO users (username, password_hash) VALUES ($1, $2)',
        ['admin', hash]
      );
      console.log('Admin user created successfully');
    }
    
    // Verify the user was created/updated
    console.log('Verifying user in database...');
    const verifyResult = await client.query('SELECT * FROM users WHERE username = $1', ['admin']);
    const user = verifyResult.rows[0];
    console.log('Admin user in database:', {
      id: user.id,
      username: user.username,
      passwordHash: user.password_hash.substring(0, 20) + '...' // Show only part of the hash for security
    });
    
    // Test password verification explicitly
    console.log('Testing password verification...');
    const isValidPassword = await bcrypt.compare(plainPassword, user.password_hash);
    console.log('Password verification test:', { 
      plainPassword,
      isValid: isValidPassword
    });
    
    if (!isValidPassword) {
      console.error('WARNING: Password verification failed! This indicates a bcrypt implementation issue.');
    } else {
      console.log('SUCCESS: Password verification successful. Login should now work.');
    }
    
  } catch (error) {
    console.error('Error resetting admin password:', error);
  } finally {
    if (client) {
      console.log('Releasing database client...');
      client.release();
      console.log('Database client released');
    }
    
    console.log('Closing database pool...');
    await pool.end();
    console.log('Database pool closed successfully');
  }
}

// Run the function and handle any uncaught errors
resetAdminPassword()
  .catch(err => {
    console.error('Unhandled error in resetAdminPassword:', err);
    pool.end().then(() => {
      console.log('Database pool closed after error');
      process.exit(1);
    });
  });