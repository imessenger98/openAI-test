import express from "express";
import * as dotenv from "dotenv";
import openAi, { template } from "./config/config.js";

dotenv.config();
const app = express();
app.use(express.json());
app.get("/", function (req, res) {
  res.send(template);
});

app.post("/", async (req, res) => {
  try {
    const { question } = req?.body;
    if (!question) {
      res.send({ result: "Please add 'question' as JSON" });
      return;
    }
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });
    const result = response.data.choices[0].message.content;
    res.send(result);
  } catch (error) {
    if (error.response && error.response.status === 429) {
      res.status(500).send(`you have exceeded the usage`);
      return;
    }
    res.status(500).send("An error occurred: " + error.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log(` started listening: http://localhost:${process.env.PORT}`);
});
