import { NextResponse } from 'next/server';
import carsData from '@/data/cars.json';

export async function GET(request, { params }) {
  const { id } = await params;
  const car = carsData.find(c => c.id === id);

  if (!car) {
    return NextResponse.json({ message: 'Car not found' }, { status: 404 });
  }

  return NextResponse.json(car);
}
