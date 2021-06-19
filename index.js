const express = require('express');
const placesRouter = require('./routes/places');

// Configuring our MongoDb database with mongoose
const configureMongoose = require('./mongoose-config');
configureMongoose();

const app = express();

// Our body-parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Our router middleware
app.use('/places', placesRouter);

app.get('/', (req, res) => {
	res.redirect('/places');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is up and running at http://localhost:${PORT}`);
});
