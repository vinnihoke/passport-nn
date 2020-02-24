const router = require('express').Router()

router.get('/google', (req, res) => {
	// Handle with Passport.js
	res.send('Google Sign in')
})

router.get('/logout', (req, res) => {
	// Handle with Passport.js
	res.send('Logout')
})

module.exports = router