import express from 'express';
import * as dotenv from 'dotenv' ;
import {openAi} from './config/config.js'

dotenv.config()
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test',async (req,res)=>{
    try {
        const completion = await openAi.createCompletion({
          model: "text-davinci-001",
          prompt: "write a resignation letter to PMO with greater than 700 words",
          temperature: 0.9,
          max_tokens:6,
          n: 1,
          stream: false,
        },
        );
        res.status(200).json({ result: completion.data.choices[0].text });
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
   
})


app.listen(process.env.PORT, () => {
    console.log(` started listening : http://localhost:/${process.env.PORT} `)
  })