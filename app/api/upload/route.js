import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.formData();
  const files = data.getAll('media');

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(uploadDir, { recursive: true });

  const savedFiles = [];

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(uploadDir, file.name);
    await writeFile(filePath, buffer);
    savedFiles.push(`/uploads/${file.name}`);
  }

  return NextResponse.json(savedFiles);
}
