const router = require('express').Router()
const fs = require('fs')
const path = require('path')

module.exports = (directory) => {
	const files = fs.readdirSync(directory)
	files.forEach(file => {
		const route = file == 'index.js' ? '/' : path.basename(file, '.js')
		router.use(route, require(path.resolve(directory, file)))
	})
	return router
}