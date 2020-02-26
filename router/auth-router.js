require('dotenv').config()
const router = require('express').Router()
const passport = require('passport')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = user => {
	const payload = {
		// This should be used for the token and the accessToken
	};
	const options = {
		expiresIn: '1h'
	}
	return jwt.sign(payload, process.env.JWT_SECRET, options)
}

router.get('/google', passport.authenticate('google', {
	scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar']
}))

// Callback route for Google. This person has already been to the consent screen. It's now going to reach out to Google for exchange of information. From here it is handed to the Callback on the passportConfig
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	res.send('You reached the callback URI')
})

router.get('/logout', (req, res) => {
	// Handle with Passport.js
	res.send('Logout')
})


module.exports = router