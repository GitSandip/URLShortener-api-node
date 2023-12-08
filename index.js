import Express from 'express';
import bodyParser from 'body-parser';
import Connection from './DB/db.js';  // Add '.js' extension
import route from './Routes/route.js';


const app = Express();
const PORT = 3000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',route);

Connection();


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
