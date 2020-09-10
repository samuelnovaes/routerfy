const fs = require('fs');
const express = require('express');
const path = require('path');

const walk = (directory, router) => {

	const items = fs.readdirSync(directory);

	for (const item of items) {

		const itemPath = path.join(directory, item);
		const stat = fs.statSync(itemPath);
		if (item.includes(".js") || item.includes(".ts")) {
			let itemName = item.split(".")[0];

			let routePath;
			if (itemName == 'index') {
				routePath = '/'
			} else if (itemName[0] == '_') {
				routePath = `/:${itemName.substr(1)}`
			} else {
				routePath = `/${itemName}`
			}

			if (stat.isFile()) {
				router.use(routePath, require(path.resolve(itemPath)))
			} else if (stat.isDirectory()) {
				router.use(routePath, middleware(itemPath))
			}
		}

	}

}

const middleware = (directory) => {
	const router = express.Router({ mergeParams: true });
	walk(directory, router);
	return router;
}

module.exports = middleware;
