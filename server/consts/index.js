require("dotenv").config();

const mongodb_uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@projects.orpph.mongodb.net/?retryWrites=true&w=majority&appName=Projects`;

module.exports = { mongodb_uri };
