import React from 'react'
import { Video } from './Video'
import ReactPlayer from 'react-player'
import './videoItem.css'
import { useHistory } from 'react-router-dom'

import * as VideoService from './VideoService'

interface Props {
	video: Video
	loadVideos: () => void
}

const VideoItem = ({ video, loadVideos }: Props) => {
	const history = useHistory()
	const handleDelete = async (id: string) => {
		await VideoService.deleteVideo(id)
		loadVideos()
	}
	return (
		<div className="col-md-4 ">
			<div className="card card-body video-card" style={{ cursor: 'pointer' }}>
				<div className="d-flex justify-content-between">
					<h1 onClick={() => history.push(`/update/${video._id}`)}>
						{video.title}
					</h1>
					<span
						className="text-danger"
						onClick={() => video._id && handleDelete(video._id)}
					>
						X
					</span>
				</div>
				<p>{video.description}</p>
				<div className="embed-responsive embed-responsive-16by9">
					<ReactPlayer url={video.url} />
				</div>
			</div>
		</div>
	)
}

export default VideoItem
