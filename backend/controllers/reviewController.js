// controllers/reviewController.js
import Review from '../models/Review.js';

const addReview = async (req, res) => {
  try {
    const { doctorId, reviewText, rating, userId, patientName } = req.body;

    const newReview = new Review({
      doctorId,
      reviewText,
      rating,
      userId,
      patientName,
    });

    await newReview.save();
    res.status(201).json({ success: true, message: 'Review added successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fetch reviews for the authenticated doctor
export const fetchDoctorReviews = async (req, res) => {
  try {
    const doctorId = req.doctor.id; // Extract doctor ID from auth middleware

    // Query reviews where the 'doctor' field matches the authenticated doctor's ID
    const reviews = await Review.find({ doctor: doctorId }).populate('user', 'name'); // Optionally populate user data

    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch reviews' });
  }
};

export { addReview };