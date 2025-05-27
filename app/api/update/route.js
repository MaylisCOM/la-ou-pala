import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const body = await req.json();
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  fs.writeFileSync(filePath, JSON.stringify(body, null, 2));
  return new Response(JSON.stringify({ message: 'Contenu mis à jour' }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
