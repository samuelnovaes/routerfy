const fs = require('fs')
const path = require('path')

const routerfy = (directory, router) => {
	const files = fs.readdirSync(directory)
	files.forEach(file => {
		const filePath = path.join(directory, file)
		if (fs.statSync(filePath).isFile() && path.extname(file) == '.js') {
			router.use(`/${(file == 'index.js' ? '' : path.basename(file, '.js'))}`, require(path.resolve(directory, file)))
		}
		else if (fs.statSync(filePath).isDirectory()) {
			router.use(`/${file}`, middleware(filePath))
		}
	})
}

const middleware = (directory) => {
	const router = require('express').Router()
	routerfy(directory, router)
	return router
}

module.exports = middleware