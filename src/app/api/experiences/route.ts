import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data';

export async function GET() {
  try {
    const experiences = await DataService.getExperiences();
    return NextResponse.json(experiences);
  } catch (error) {
    console.error('Failed to fetch experiences:', error);
    return NextResponse.json(
      { error: 'Failed to fetch experiences' },
      { status: 500 }
    );
  }
} 
