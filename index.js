const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const placesRouter = require('./routes/places');

// Configuring our MongoDb database with mongoose
const configureMongoose = require('./mongoose-config');
configureMongoose();

const app = express();

// Our cross origin resource sharing middlewares
app.use(cors());

// Our public folder setup middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Our method override middlewares
app.use(methodOverride('_method'));

// Our body-parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Our router middleware
app.use('/places', placesRouter);

app.get('/', (req, res) => {
	res.redirect('/places');
});

// Our universal route, which renders the error page
app.get('*', (req, res) => {
	res.sendFile('./public/error404.html', { root: __dirname });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is up and running at http://localhost:${PORT}`);
});
