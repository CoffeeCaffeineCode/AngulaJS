const
    express = require('express'),
    path = require('path'),
    app = express()

const routes = require('./routes')

app.use(express.static(path.join(__dirname)))
app.use(routes())

app.listen(8080, () => {
    console.log('SERVER Running')
})