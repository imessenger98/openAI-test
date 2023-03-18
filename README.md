OpenAI API Usage Instructions

To use the OpenAI API in your application, you can send a POST request to the following endpoint: /

The POST request should include a JSON object with the following structure:

{
"question": "Your question goes here"
}

The response from the API will be a JSON object with the answer to your question.

Curl Request

```bash
curl --location --request POST 'http://localhost:3000/open-api' \
--header 'Content-Type: application/json' \
--data-raw '{"model":"text-davinci-003","prompt":"which is the easiest programming language "}'
```

Enjoy
