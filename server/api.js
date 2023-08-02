import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv"
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY

if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is not set')
    process.exit(1) //closes the backend if the openai api key is not set
}

const configuration = new Configuration({
    apiKey: openaiApiKey
})
const openai = new OpenAIApi(configuration)

export default openai