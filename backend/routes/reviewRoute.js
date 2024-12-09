// routes/reviewRoute.js
import express from 'express';
import { addReview } from '../controllers/reviewController.js';
import authUser  from '../middlewares/authUser.js';

const reviewRouter = express.Router();

reviewRouter.post('/add-review', authUser , addReview);

export default reviewRouter;