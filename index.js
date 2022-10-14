import express from 'express';
import * as dotenv from 'dotenv' ;
import {openAi} from './config/config.js'

dotenv.config()
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/areyouthere',async (req,res)=>{
    try {
        const completion = await openAi.createCompletion({
          model: "text-davinci-001",
          prompt: "are you there ?",
        },
        {
            timeout: 20000,
          }
        );
        res.send(completion.data.choices[0].text)
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
    console.log(`app listening on port ${process.env.PORT}`)
  })