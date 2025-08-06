'use server'
import * as deepl from 'deepl-node'

const authKey = process.env.DEEPL_API_KEY as string

const deeplClient = new deepl.DeepLClient(authKey)

export const availableLanguages= async () => await deeplClient.getSourceLanguages();

