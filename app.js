const express = require('express')
const app = express()

app.use(express.static('app'))

app.listen(8081, () => {
    console.log('Movies app listening on port 8081!')
})
