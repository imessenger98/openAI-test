import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.secret_key,
});

const openAi = new OpenAIApi(configuration);
export default openAi;

export const template = `
<h1>OpenAI API Usage Instructions</h1>
<p>
  To use the OpenAI API in your application, you can send a POST request to the following endpoint: 
  <code>/</code>
</p>
<p>
  The POST request should include a JSON object with the following structure:
</p>
&nbsp;
<pre>
{
"question": "Your question goes here"
}
</pre>
&nbsp;
<p>
  The response from the API will be a JSON object with the answer to your question.
</p>
<h2>Curl Request</h2>
<pre>
curl --location 'http://localhost:3000/' \
--header 'Content-Type: application/json' \
--data '{
    "question": "hi"
}'
	</pre>
Enjoy :)
`;