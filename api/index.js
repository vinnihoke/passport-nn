const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan');
const cors = require('cors')

const authRouter = require('../router/auth-router.js');

const api = express();

api.use(helmet());
api.use(morgan());
api.use(express.json());
api.use(cors());

api.use('/auth', authRouter);

api.get('/', (req, res) => {
	res.sendStatus(200)
})

module.exports = api;