/**
 * Created by wminikuma@gmail.com on 2020/09/07
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

import express from 'express';
import routes from './src/routes/crmRoutes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://your-host/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// mongoose connection check
const mongo_db = mongoose.connection;
mongo_db.on('error', console.error.bind(console, 'connection error'));
mongo_db.once('open', () => {
    console.log('mongo db connection OK')
});

// body-parser setup
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

routes(app)

app.get('/', (req, res) =>
    res.send(`Node and Express server running on PORT ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);


