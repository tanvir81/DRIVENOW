import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  // In a real database scenario, we would delete the booking with ID = params.id
  // Since we are using in-memory storage which is not shared reliably across serverless functions,
  // we can only simulate the success response here.
  
  const id = params.id;
  /* 
  // Code for real DB:
  await db.collection('bookings').deleteOne({ id });
  */

  return NextResponse.json({ message: `Booking ${id} simulated deletion` });
}
