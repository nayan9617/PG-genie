const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');


const ImageSchema = new Schema({ 
        url: String,
        filename: String
});

ImageSchema.virtual('thumbnail').get(function() {
    return this.url.replace('/upload', '/upload/w_200,h_130');
})

const opts = { toJSON: { virtuals: true } };

const PgSchema = new Schema({
    title: String,
    price: Number,
    owner: {
        name: String,
        phone: Number
    },
    furniture: { type: Boolean, default: false },
    attachedBath: { type: Boolean, default: false },
    waterSupply: { type: Boolean, default: false },
    geyser: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false },
    backupPower: { type: Boolean, default: false },
    cctv: { type: Boolean, default: false },
    washingMachine: { type: Boolean, default: false },
    petFriendly: { type: Boolean, default: false },
    images: [ImageSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts);

PgSchema.virtual('properties.popUpMarkup').get(function(){
    return `<strong><a href="/PG/${this._id}">${this.title}</a></strong>
            <p>${this.description.substring(0,30)}...</p>`;
})

PgSchema.post('findOneAndDelete', async function(doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Pg', PgSchema); 