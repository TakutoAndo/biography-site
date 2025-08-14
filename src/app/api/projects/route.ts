import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let projects;
    if (status) {
      projects = await DataService.getProjectsByStatus(status);
    } else {
      projects = await DataService.getProjects();
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
} 
