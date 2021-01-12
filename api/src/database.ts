import mongoose, { ConnectionOptions } from 'mongoose'
;(async () => {
	const mongooseOptions: ConnectionOptions = {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	}
	await mongoose.connect(
		'mongodb+srv://db_user_otro:12345@nodejsplatzi.cg57m.mongodb.net/merntypescript?retryWrites=true&w=majority',
		mongooseOptions,
		() => {
			console.log('[database] Base de datos conectada')
		},
	)
})()
