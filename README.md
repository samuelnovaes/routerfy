# auto-route
Automatic route generator for Express

# install

```bash
npm install auto-route
```

# Usage

```javascript
const express = require('express')
const autoRoute = require('auto-route')

const app = express()

//Generate routes from 'routes' directory
app.use(autoRoute('routes'))

app.listen(8080)
```

# Example

Routes directory. Each JS file returns an [Express router](http://google.com)

```
routes
|---index.js
|---foo.js
└---bar.js
```
```javascript
const express = require('express')
const autoRoute = require('auto-route')

const app = express()

app.use('/api', autoRoute('routes'))

/*
	Routes generated:
	/api/...
	/api/foo/...
	/api/bar/...
*/

app.listen(8080)
```
