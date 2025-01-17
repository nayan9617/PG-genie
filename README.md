
# PG Buddy

PG Buddy is a web application designed to help users find, review, and rate paying guest (PG) accommodations. Whether you're a tenant looking for your next stay or a PG owner aiming to showcase your property, PG Buddy makes the process seamless and efficient.

## Features

- **PG Listings**: Browse PG accommodations with detailed descriptions, images, and amenities.
- **Search and Filters**: Search for PGs by location, price range, and facilities.
- **User Reviews**: View and post reviews for PGs to make informed decisions.
- **Authentication**: Secure user login and registration system.
- **CRUD Operations**: Add, edit, and delete PG listings (for authorized users).
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Passport.js for user authentication
- **Hosting**: (e.g., Heroku, Render, or Vercel)

## Installation

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/pg-buddy.git
   cd pg-buddy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   DATABASE_URL=your_mongodb_connection_string
   SECRET=your_secret_key
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Access the app**:
   Open your browser and go to `http://localhost:3000`.

## Usage

1. **Browse Listings**: View available PGs and filter them by your preferences.
2. **User Accounts**: 
   - Register as a tenant to review and rate PGs.
   - Register as a PG owner to list and manage accommodations.
3. **Post Reviews**: Share your experience with others by leaving reviews.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Bootstrap](https://getbootstrap.com/)
