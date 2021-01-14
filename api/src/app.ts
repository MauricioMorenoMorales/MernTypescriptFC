import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

// Inicializaciones
const app = express()

// Importando modulos locales
import config from './config'
import videoRoutes from './routes/videos.routes'

//Configuracion de la aplicacion
app.set('port', process.env.PORT || config.PORT)
app.use(videoRoutes)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

export default app
