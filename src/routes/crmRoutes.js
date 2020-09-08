/**
 * Created by wminikuma@gmail.com on 2020/09/07
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

import { addNewContact, getContact, getContactWitID, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from : ${req.originalUrl}`)
            console.log(`Request from : ${req.method}`)
            next();
        }, getContact)

        // post end-point
        .post(addNewContact);

    app.route('/contact/:contactID')
        // get a specify contact
        .get(getContactWitID)

        // updating a specify contact
        .put(updateContact)

        // deleting a specify contact
        .delete(deleteContact)
}

export default routes;