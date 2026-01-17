import { NextResponse } from 'next/server';

// In-memory storage for Vercel Demo
// Note: This data will vanish when the Serverless Function spins down (cold start).
// For production, use MongoDB.
let bookings = [];

export async function GET() {
  return NextResponse.json(bookings);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { carId, userId, date, duration } = body;

    if (!carId || !date) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const newBooking = {
      id: Date.now().toString(),
      carId,
      userId: userId || 'guest',
      date,
      duration: Number(duration) || 1,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error processing booking', error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  // Since we don't have :id in the URL for route.js easily without dynamic segment folder,
  // we will accept ID in the query string or body. 
  // But strictly replacing the express route `router.delete('/:id')`:
  // In Next.js App Router, we usually use a separate `route.js` in `[id]` folder.
  // HOWEVER, specifically for this simple migration, I'll assume the client might send it differently 
  // OR I should conform to the REST standard and create api/bookings/[id]/route.js.
  // Let's create the [id] route separately for DELETE.
  return NextResponse.json({ message: 'Method not allowed on base collection' }, { status: 405 });
}
