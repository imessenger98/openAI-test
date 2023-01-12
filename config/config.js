import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv' ;
dotenv.config()

const configuration = new Configuration({
    apiKey:process.env.secret_key,
});
const openAi = new OpenAIApi(configuration);
export default openAi;
