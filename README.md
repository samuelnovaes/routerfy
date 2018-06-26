# routerfy

Automatic route generator for Express

[![NPM](https://nodei.co/npm/routerfy.png)](https://nodei.co/npm/routerfy/)

# install

```bash
npm install routerfy
```

# Example

```javascript
const express = require('express')
const routerfy = require('routerfy')

const app = express()

//Generate routes from 'routes' directory
app.use('/api', routerfy('routes'))

app.listen(8080)
```

## Routes directory

```
routes
|---index.js
|---foo.js
|---bar.js
└---dir
	|---index.js
	|---foo.js
	└---bar.js
```

## Example of JS router file

routes/foo.js

```javascript
	const router = require('express').Router()

	//router.get, router.post, router.put, router.delete, ...
	router.get('/', (req, res) => {
		res.send('I am foo.js')
	})

	//It must be exports._router to work properly. If not, this file will be ignored
	exports._router = router
```

## Generated routes

*   /api/
*   /api/foo
*   /api/bar
*   /api/dir
*   /api/dir/foo
*   /api/dir/bar

# Important

In case of creating a router with `routes/foo.js` and `routes/foo/index.js`, the priority is `routes/foo/index.js`.