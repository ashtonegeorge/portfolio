import { NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

const filePath = join(process.cwd(), 'public', 'Resume.docx');

export async function GET() {
  try {
    const fileBuffer = await fs.readFile(filePath);

    const headers = new Headers({
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': 'attachment; filename=Resume.docx',
    });

    return new NextResponse(fileBuffer, {
      headers,
    });
  } catch (error) {
    return new NextResponse('File not found', {
      status: 404,
    });
  }
}