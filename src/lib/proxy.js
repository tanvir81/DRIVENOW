import { NextResponse } from 'next/server';

const API_URL = 'http://localhost:4000';

export async function proxyRequest(request, pathParams) {
  const { proxy } = pathParams;
  const path = proxy.join('/');
  const url = `${API_URL}/api/${path}`;

  try {
    const options = {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      const body = await request.json();
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);
    
    // Check if response is JSON, otherwise get text
    const contentType = res.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    } else {
      data = { message: await res.text() };
    }
    
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("PROXY ERROR:", error);
    return NextResponse.json(
      { message: 'Proxy failure', error: error.message }, 
      { status: 500 }
    );
  }
}
