import { Router, Request, Response } from 'express'
const router = Router()

router.get('/videos', (req: Request, res: Response) => {
	res.json('getting videos')
})

export default router
