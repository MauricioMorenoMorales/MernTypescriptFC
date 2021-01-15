import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Video } from './Video'
import * as videoService from './VideoService'

const VideoList = () => {
	const [videos, setVideos] = useState<Video[]>([])
	const loadVideos = async () => {
		const data = await videoService.getVideos()
		setVideos(data.data)
	}
	useEffect(() => {
		loadVideos()
	}, [])
	return (
		<div>
			{videos.map(video => {
				return (
					<div key={video._id}>
						<h1>{video.title}</h1>
					</div>
				)
			})}
		</div>
	)
}

export default VideoList
