require('dotenv').config()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy({
	// Options for the strategy
	clientID: process.env.G_CLIENT_ID,
	clientSecret: process.env.G_CLIENT_SECRET,
	callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, scopes, done) => {
	// This is the callback that fires after the options run.
	console.log('passport callback function fired')
	console.log(scopes)
	console.log(accessToken)

	// todo I suppose here would likely have a SQL model to add this stuff to the database. Once added, we should have access to everything on the scopes object. There should be something with the Done keyword, but I haven't gotten there in the video series. There should also be a check if the user exists in our DB. and if we need to grab the accessToken, or refreshToken.
})
)