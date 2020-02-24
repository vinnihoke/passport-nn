const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy({
	// Options for the strategy
}), () => {
	// This is the callback that fires after the options run.
})