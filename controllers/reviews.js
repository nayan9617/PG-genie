const Review = require('../models/review');
const Pg = require('../models/pg');

module.exports.createReview = async(req, res) => {
    const pg = await Pg.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id; 
    pg.reviews.push(review);
    await review.save();
    await pg.save();
    req.flash('success', 'Successfully created new review');
    res.redirect(`/PG/${pg ._id}`);
}

module.exports.deleteReview = async(req, res) => {
    const { id, reviewId } = req.params;
    await Pg.findByIdAndUpdate(id, { $pull: {reviews : reviewId }});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review');
    res.redirect(`/PG/${id}`); 
}