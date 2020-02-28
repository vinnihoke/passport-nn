require('dotenv').config()
const router = require('express').Router()
const passport = require('passport')
const Auth = require('../model/auth-model.js');
const { google } = require('googleapis');
const axios = require('axios');

const calendar = google.calendar({
	version: 'v3',
	auth: process.env.G_API_KEY
})

// ! This is all for Grant


router.get('/hello', async (req, res) => {
	try {
		// const events = await calendar.calendarList.list()
		const events = await axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
			headers: {
				Authorization: "OAuth ya29.Il_ABy6SHwiXjfghLP_I2SChZjBW5YdKrjBbL4QrU8aWxZFNcGrVOucaalhIY8qsvqw2_hCLqEe0IcDrmA_P30Q2bqTMiT9Q05yZRJoTZYPwXRLHpeYHMtEduCeVIe8nFA 1//04cbHUZStHngUCgYIARAAGAQSNwF-L9IrJHLiGM8_UlaH78AKD4P-NKQeMPUH_un2joggQ1mvB8d6WwVn8AStU-39jNxicH1y5Y4"
			}
		})
		console.log("This is the req", req.session)
		// console.log(events.data)
		res.status(200).json(req.session)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
})






// ! This is all for Passport.
// const authCheck = (req, res, next) => {
// 	// if (!req.user) {
// 	// 	res.redirect('/auth/google')
// 	// } else {
// 	next()
// 	// }
// }

// router.get('/google', authCheck, passport.authenticate('google', {
// 	scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar']
// }))

// // Callback route for Google. This person has already been to the consent screen. It's now going to reach out to Google for exchange of information. From here it is handed to the Callback on the passportConfig
// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
// 	res.redirect('/auth/profile')
// })

// router.get('/profile', authCheck, async (req, res) => {
// 	try {
// 		const request = await Auth.findById(req.user)
// 		res.status(200).json(request)
// 	} catch (e) {
// 		res.status(500)
// 	}
// })

// router.get('/logout', (req, res) => {
// 	// Handle with Passport.js
// 	req.logout();
// })


module.exports = router