import React, { useEffect, useState } from 'react'
import { Video } from './Video'
import * as videoService from './VideoService'

import VideoItem from './VideoItem'

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
				return <VideoItem video={video} />
			})}
		</div>
	)
}

export default VideoList
