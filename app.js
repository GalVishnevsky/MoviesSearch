const express = require('express')
const app = express()

app.use(express.static('app'))

app.listen(80, () => {
    console.log('Movies app listening on port 3000!')
})
