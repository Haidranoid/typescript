import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import loginRoutes from "./routes/loginRoutes";

const app = express();

// enables access to req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({keys: ['laskdjf']}))
app.use(loginRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000;')
})