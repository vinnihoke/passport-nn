require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan');
const cors = require('cors')
const cookie = require('cookie-session');
const passport = require('passport');
const session = require('express-session');
const grant = require('grant-express');

const authRouter = require('../router/auth-router.js');
// const passportConfig = require('../database/passportConfig.js')

const api = express();

api.use(helmet());
api.use(morgan('dev'));
api.use(express.json());
api.use(cors());
// api.use(cookie({
// 	maxAge: 24 * 60 * 60 * 1000,
// 	keys: [process.env.SESSION_KEY]
// }));

// Initialize Passport
// api.use(passport.initialize());
// api.use(passport.session());
api.use(session({ secret: process.env.SESSION_KEY, saveUninitialized: true, resave: true }))
api.use(grant({
	defaults: {
		protocol: 'http',
		host: 'localhost:3000',
		transport: "session",
		state: true
	},
	google: {
		key: process.env.G_CLIENT_ID,
		secret: process.env.G_CLIENT_SECRET,
		scope: ['profile', 'email', 'openid', 'https://www.googleapis.com/auth/calendar'],
		nonce: true,
		custom_params: { "access_type": "offline" },
		callback: "/auth/hello"
	},
	facebook: {
		key: process.env.F_CLIENT_ID,
		secret: process.env.F_CLIENT_SECRET,
		callback: "/auth/hello"
	},
}))

api.use('/auth', authRouter);

api.get('/', (req, res) => {
	res.sendStatus(200)
})

module.exports = api;