import app from './app'
import './database'

app.listen(app.get('port'), () => {
	console.log(`[Index] Servidor corriendo en el puerto ${app.get('port')}`)
})
