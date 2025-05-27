import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const content = fs.readFileSync(filePath, 'utf8');
  return new Response(content, {
    headers: { 'Content-Type': 'application/json' }
  });
}
