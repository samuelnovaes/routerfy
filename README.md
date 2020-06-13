# routerfy

Nuxt like router for Express

[![NPM](https://nodei.co/npm/routerfy.png)](https://nodei.co/npm/routerfy/)

# install

```bash
npm install routerfy
```

# Usage

Routerfy automatically generates the routes based on your file tree inside the routes directory.

```javascript
const express = require('express')
const routerfy = require('routerfy')

const app = express()

app.use(routerfy('routes'))

app.listen(8080)
```

# Basic routes

This file tree:

```
routes/
--| user/
-----| index.js
-----| one.js
--| index.js
```

will automatically generate:

- /
- /user
- /user/one

# Dynamic routes

To define a dynamic route with a parameter, you need to define a JavaScript file OR a directory prefixed by an underscore.

This file tree:

```
routes/
--| _slug/
-----| comments.js
-----| index.js
--| users/
-----| _id.js
--| index.js
```

will automatically generate:

- /
- /users/:id
- /:slug
- /:slug/comments

> Note: For dynamic routes to work properly, you must use the `mergeParams: true`javascript option when calling the `express.Router` function

```javascript
const router = require('express').Router({ mergeParams: true });

router.get('/', (req, res) => {
	res.send(req.params.slug);
});

module.exports = router;
```
