/**
 * Created by wminikumagmail.com on 2020/09/07
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from : ${req.originalUrl}`)
            console.log(`Request from : ${req.method}`)
            next();
        }, ((req, res, next) => {
            res.send('GET Request successful!!')
        }))
        .post((req, res) => {
            res.send('POST Request successful!!')
        })
    app.route('/contact/:contactID')
        .put((req, res) => {
            res.send('PUT Request successful!!')
        })
        .delete((req, res) => {
            res.send('DELETE Request successful!!')
        })
}

export default routes;