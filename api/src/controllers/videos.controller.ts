import { RequestHandler } from 'express'

import Video from '../models/video.model'

export const getVideos: RequestHandler = (req, res) => {
	res.send('Getting videos')
}

export const getVideo: RequestHandler = (req, res) => {
	res.send('Getting videos id')
}

export const createVideo: RequestHandler = (req, res) => {
	const video = new Video(req.body)
	console.log(video)
	console.log(req.body)
	res.json('Probando velocidad')
}

export const deleteVideo: RequestHandler = (req, res) => {
	console.log('Getting videos')
}
export const updateVideo: RequestHandler = (req, res) => {
	console.log('Getting videos')
}
