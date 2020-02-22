require('dotenv').config()
const api = require('./api/index.js');

const PORT = process.env.PORT || 3200

api.listen(PORT, () => console.log(`::: Server running on port ${PORT} :::`))
