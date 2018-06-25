const fs = require('fs')
const path = require('path')

const routerfy = (directory, router) => {
	const files = fs.readdirSync(directory)
	files.map(file => {
		const filePath = path.join(directory, file)
		const stat = fs.statSync(filePath)
		if (stat.isFile() && path.extname(file) == '.js') {
			const routerModule = require(path.resolve(filePath))
			if (routerModule._router)
				router.use(`/${(file == 'index.js' ? '' : path.basename(file, '.js'))}`, routerModule._router)
		}
		else if (stat.isDirectory())
			router.use(`/${file}`, middleware(filePath))
	})
}

const middleware = (directory) => {
	const router = require('express').Router()
	routerfy(directory, router)
	return router
}

module.exports = middleware