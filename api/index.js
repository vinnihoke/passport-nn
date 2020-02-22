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

api.use('/api/auth', authRouter);

api.get('/', (req, resizeBy) => {
	res.sendStatus(200)
})

module.exports = api;