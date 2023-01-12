import express from "express";
import * as dotenv from "dotenv";
import openAi from "./config/config.js";

dotenv.config();
const app = express();
app.use(express.json());
app.get("/", function (req, res) {
  res.send("open API");
});

// model: "text-davinci-003",
app.post("/open-api", async (req, res) => {
  try {
    const { model, prompt } = req?.body;
    if (!model || !prompt) res.send({ result: "invalid request" });
    const response = await openAi.createCompletion({
      model,
      prompt,
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.2,
      presence_penalty: 0,
    });
    const result = response?.data.choices[0].text;
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(` started listening: http://localhost:${process.env.PORT} `);
});
