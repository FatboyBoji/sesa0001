import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'simple';
  
  const apiUrl = type === 'complex' 
    ? 'http://sesa-factory.eu:20080/sitestat/api/generate/complex/id'
    : 'http://sesa-factory.eu:20080/sitestat/api/generate/id';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching ID:', error);
    return NextResponse.json(
      { error: 'Failed to generate ID' },
      { status: 500 }
    );
  }
}