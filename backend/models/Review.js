// models/Review.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctorModel',  // Reference to the Doctor model
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  patientName: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',  // Reference to the User model
    required: true,
  },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;