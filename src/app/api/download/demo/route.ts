import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(
    'https://github.com/khushaltechofficial/vyron-os-public/releases/download/v1.2.4/VyronAI_Demo.exe',
    { status: 302 }
  );
}
