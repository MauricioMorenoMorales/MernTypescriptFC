import React, { ChangeEvent, useState } from 'react'
import { Video } from './Video'

const VideoForm = () => {
	const [video, setVideo] = useState<Video>({
		title: '',
		description: '',
		url: '',
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setVideo({ ...video, [e.target.name]: e.target.value })
	}
	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-body">
						<h3>newVideo</h3>
						<form action="">
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
								/>
							</div>
							<div className="form-group">
								<textarea
									name="description"
									className="form-control"
									placeholder="Write a description"
									rows={3}
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
