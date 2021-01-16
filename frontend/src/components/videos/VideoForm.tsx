import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Video } from './Video'
import { toast } from 'react-toastify'

import * as VideoService from './VideoService'

const VideoForm = () => {
	const [video, setVideo] = useState<Video>({
		title: '',
		description: '',
		url: '',
	})

	const history = useHistory()

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setVideo({ ...video, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await VideoService.createVideos(video)
		toast.success('New video added')
	}
	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-body">
						<h3>newVideo</h3>
						<form action="" onSubmit={handleSubmit}>
							<div className="form-group">
								<input
									type="text"
									name="title"
									placeholder="Write a title for this video"
									className="form-control"
									autoFocus
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="url"
									placeholder="https://somesite.com"
									className="form-control"
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<textarea
									name="description"
									className="form-control"
									placeholder="Write a description"
									rows={3}
									onChange={handleInputChange}
								></textarea>
							</div>
							<button className="btn btn-primary">Create Video</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoForm
