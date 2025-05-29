import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  const mediaPath = path.join(process.cwd(), 'public', 'uploads');
  try {
    const files = await readdir(mediaPath);
    const fileUrls = files.map((f) => `/uploads/${f}`);
    return Response.json(fileUrls);
  } catch (err) {
    return new Response('Erreur lecture dossier', { status: 500 });
  }
}
