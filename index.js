/**
 * Created by wminikumagmail.com on 2020/09/07
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

import express from 'express';
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 4000;

routes(app)

app.get('/', (req, res) =>
    res.send(`Node and Express server running on PORT ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);


