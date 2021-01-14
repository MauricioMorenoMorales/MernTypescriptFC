import { RequestHandler } from 'express'

import Video from '../models/video.model'

export const getVideos: RequestHandler = async (req, res) => {
	try {
		const videos = await Video.find()
		return res.json(videos)
	} catch (err) {
		res.json(err)
		console.log(err)
	}
}

export const getVideo: RequestHandler = async (req, res) => {
	const response = await Video.findById(req.params.id)
	if (!response) return res.status(204).json()
	return res.json(response)
}

export const createVideo: RequestHandler = async (req, res) => {
	const videoFound = await Video.findOne({ url: req.body.url })
	if (videoFound) {
		return res
			.status(301)
			.json({ message: 'Este video ya se ha subido con anterioridad' })
	} else {
		const video = new Video(req.body)
		const savedVideo = await video.save()
		console.log(req.body)
		res.json(savedVideo)
	}
}

export const deleteVideo: RequestHandler = async (req, res) => {
	const response = await Video.findByIdAndDelete(req.params.id)
	if (!response) return res.status(204).json()
	return res.json(response)
}
export const updateVideo: RequestHandler = async (req, res) => {
	const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
	res.json(videoUpdated)
}
