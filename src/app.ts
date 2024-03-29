import express from "express";
import bodyParser from "body-parser";

const app = express();

// enables access to req.body
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log('Listening on port 3000;')
})