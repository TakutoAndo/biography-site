import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data';

export async function GET() {
  try {
    const skills = await DataService.getSkills();
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
} 
