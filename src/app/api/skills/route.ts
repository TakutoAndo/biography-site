import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let skills;
    if (category) {
      skills = await DataService.getSkillsByCategory(category);
    } else {
      skills = await DataService.getSkills();
    }

    return NextResponse.json(skills);
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
} 
