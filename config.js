if (process.env.NODE_ENV != 'production') require('dotenv').load()

module.exports = {
	APPNAME: process.env.APPNAME || 'Dice Roll Simulator',
    PORT: process.env.PORT || 8081,
    DEVMODE: (process.env.NODE_ENV != 'production')
}