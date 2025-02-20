import { NextResponse } from 'next/server';

// Helper function to handle CORS headers
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function GET(request: Request) {
  try {
    // Get the URL parameters
    const url = new URL(request.url);
    const params = url.searchParams;

    // Construct the external API URL with the correct port
    const apiUrl = `http://www.sesa-factory.eu:20080/sitestat/api/html/contact/call?${params.toString()}`;
    
    console.log('Attempting to call external API:', apiUrl);

    // Forward the request to the external API
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Accept-Language': 'de-DE,de;q=0.9',
        'Connection': 'keep-alive',
      },
    });

    // Check if the response is ok
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error('API Error Response:', {
        status: apiResponse.status,
        statusText: apiResponse.statusText,
        body: errorText
      });
      throw new Error(`API responded with status ${apiResponse.status}`);
    }

    // Return success response
    return NextResponse.json(
      { success: true },
      { 
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 