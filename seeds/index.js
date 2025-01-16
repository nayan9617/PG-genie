const mongoose = require('mongoose');
const Pg = require('../models/pg');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');

if (process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error :("));
db.once('open' , () => {
    console.log("Database connected")
}); 

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async() => {
    await Pg.deleteMany({});
    for (let i=1 ; i<=200 ; i++){
        const random1467 = Math.floor(Math.random() * 40);
        const price = Math.floor(Math.random() * 3000) + 3000;
        const p = new Pg({
            author: '67701b6a5d806bf81bf59e87',
            location: `${cities[random1467].city}, ${cities[random1467].state}`,
            owner: {
              name: 'Anonymous',
              phone: 9345600000,
            },
            furniture: true,
            wifi: true,
            waterSupply: true,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                  url: 'https://res.cloudinary.com/dqwsuokwl/image/upload/v1736588613/PGBuddy/x7qlzfw6hnnqva0vo2w9.jpg',
                  filename: 'PGBuddy/x7qlzfw6hnnqva0vo2w9',
                },
                {
                  url: 'https://res.cloudinary.com/dqwsuokwl/image/upload/v1736588613/PGBuddy/rkrxmmuokbr7pfwodllq.jpg',
                  filename: 'PGBuddy/rkrxmmuokbr7pfwodllq',
                },
                {
                  url: 'https://res.cloudinary.com/dqwsuokwl/image/upload/v1736588611/PGBuddy/nwg1v4g3hlw0kusuqcfi.jpg',
                  filename: 'PGBuddy/nwg1v4g3hlw0kusuqcfi',
                },
                {
                  url: 'https://res.cloudinary.com/dqwsuokwl/image/upload/v1736588613/PGBuddy/vzgvfrjba080bi4dmusu.jpg',
                  filename: 'PGBuddy/vzgvfrjba080bi4dmusu',
                }
              ],
            description: sample([
                'A cozy place to call home.',
                'Perfect for students and professionals alike.',
                'Affordable and comfortable accommodations.',
                'Conveniently located with excellent amenities.',
                'A spacious and peaceful retreat for residents.',
                'Experience comfort and affordability under one roof.',
                'Located in the heart of the city with easy access to public transport.',
                'A perfect balance of modern living and homely vibes.',
                'Ideal for long stays with all essential facilities.',
                'Well-maintained and budget-friendly accommodation.',
                'A serene environment for a stress-free lifestyle.',
                'Fully furnished rooms with high-speed internet included.',
                'Safe and secure living with 24/7 surveillance.',
                'Close to popular cafes, shopping centers, and offices.',
                'Bright and airy rooms with plenty of natural light.',
                'Friendly neighborhood with great connectivity.',
                'Premium living spaces at an affordable price.',
                'Well-connected to major educational institutions and workplaces.',
                'Your go-to choice for hassle-free living.',
                'Top-notch facilities and excellent service guaranteed.',
                'Comfortable living spaces tailored to your needs.',
                'Perfect for those looking for a vibrant community atmosphere.',
                'Enjoy modern amenities in a homely setup.',
                'Thoughtfully designed spaces for maximum convenience.',
                'Stay close to your work or campus in style.'
            ]),
            price: price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1467].longitude,
                    cities[random1467].latitude
                ]
            }
        });
        await p.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});
