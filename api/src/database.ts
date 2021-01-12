import mongoose, { ConnectionOptions } from 'mongoose'
import config from './config'
;(async () => {
	try {
		const mongooseOptions: ConnectionOptions = {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		}
		const db = await mongoose.connect(
			`mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@nodejsplatzi.cg57m.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,
			mongooseOptions,
			() => {
				console.log(`[Database] Base de datos conectada`)
			},
		)
	} catch (err) {
		console.error(err)
	}
})()
