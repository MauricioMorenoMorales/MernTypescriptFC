import express from 'express'
const app = express()
import config from './config'

app.use(require('./routes/videos.routes'))

app.set('port', process.env.PORT || config.PORT)

export default app
