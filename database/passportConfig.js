require('dotenv').config()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const Auth = require('../model/auth-model.js')

passport.serializeUser((user, done) => {
	// Null would be the error. 
	done(null, user.id)
})

passport.use(new GoogleStrategy({
	// Options for the strategy
	clientID: process.env.G_CLIENT_ID,
	clientSecret: process.env.G_CLIENT_SECRET,
	callbackURL: '/auth/google/redirect'
}, async (accessToken, refreshToken, scopes, done) => {
	// This is the callback that fires after the options run.
	let user = {
		auth_id: scopes.id,
		auth_provider: scopes.provider,
		firstname: scopes._json.given_name,
		lastname: scopes._json.family_name,
		picture: scopes._json.picture,
		email: scopes._json.email,
		email_verified: scopes._json.email_verified,
		// googleToken: accessToken
	}
	let currentUser = await Auth.findBy({ auth_id: scopes.id })
	if (currentUser) {
		// This person is a current user
		console.log(`Welcome back ${currentUser[0].firstname}!`)
		console.log(currentUser)
		done(null, currentUser)
	} else {
		// This person is a new user
		try {
			const newUser = await Auth.add(user)
			done(null, newUser)
		} catch (e) {
			console.log("Error on line 26 passportConfig.js", e.message)
		}
	}
})
)