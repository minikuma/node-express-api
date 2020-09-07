/**
 * Created by wminikumagmail.com on 2020/09/07
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

import { addNewContact, getContact, getContactWitID } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from : ${req.originalUrl}`)
            console.log(`Request from : ${req.method}`)
            next();
        }, getContact)
        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWitID)
        .put((req, res) => {
            res.send('PUT Request successful!!')
        })
        .delete((req, res) => {
            res.send('DELETE Request successful!!')
        })
}

export default routes;