const
    express = require('express'),
    router = express.Router(),
    path = require('path')

module.exports = () => {
    router.get('/signup', (req, res) => {
 		res.sendFile(path.join(__dirname,'./client/views/signup.html'))
    })

    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './index.html'))
    })

    return router
}