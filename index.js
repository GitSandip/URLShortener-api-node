import Express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import Connection from './DB/db.js';  
import route from './Routes/route.js';
import cors from 'cors'

const app = Express();
const PORT = 8000;

const corsOptions = {
  origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',route);

Connection();


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
