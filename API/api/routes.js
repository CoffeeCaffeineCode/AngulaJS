const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const { artistname } = req.query
        superagent
            /*.get('https://api.spotify.com/v1/search?q='+'jack'+'&type=artist')*/
            .get('https://api.spotify.com/v1/search?q='+artistname+'&type=artist')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })
    router.get('/api/details', (req, res) => {
        const { id } = req.query 
        superagent
            .get('https://api.spotify.com/v1/artists/'+id+'/albums?market=US&album_type=album')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}