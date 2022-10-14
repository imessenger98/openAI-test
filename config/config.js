import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: process.env.org_id,
    apiKey:process.env.secret_key,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();