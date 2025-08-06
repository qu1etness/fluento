import { ITranslate, translationAction } from '@/actions/translation-action';

export async function GET(
  { params }: { params: Promise<ITranslate> }
) {

  console.log("PROBLEM");

  // return Response.json({ message: 'Hello World' })
  return Response.json({ data: await translationAction(await params) })
}