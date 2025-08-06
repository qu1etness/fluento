'use server'
import * as deepl from 'deepl-node'

export interface ITranslate {
  phrase: string,
  language: deepl.TargetLanguageCode
}
const authKey = process.env.DEEPL_API_KEY as string

const deeplClient = new deepl.DeepLClient(authKey)

export const translationAction= async ({ phrase, language }: ITranslate) => await deeplClient.translateText(phrase, null, language);

