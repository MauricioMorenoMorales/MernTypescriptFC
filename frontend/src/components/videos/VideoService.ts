import axios from 'axios'
import { Video } from './Video'

const API = 'http://localhost:4000'

export const getVideos = async () => {
	return await axios.get(`${API}/videos`)
}

export const createVideos = async (video: Video) => {
	return await axios.post(`${API}/videos`, video)
}
