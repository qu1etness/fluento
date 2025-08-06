import { availableLanguages } from '@/actions/available-languages';

export async function GET() {
  return Response.json(await availableLanguages())
}