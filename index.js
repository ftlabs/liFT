if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
const express_enforces_ssl = require('express-enforces-ssl');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 2020;

const Structure = require('./bin/lib/structure');

if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
	app.enable('trust proxy');
	app.use(express_enforces_ssl());
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/left', async (req, res) => {
	const private_metadata = {
		channel: req.body.channel,
		response_url: req.body.response_url,
	};

	// get passed parameters

	// generate random sequence of message

	// fire off messages sequentially

	//
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
