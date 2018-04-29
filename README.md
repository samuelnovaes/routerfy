# routerfy
Automatic route generator for Express

# install

```bash
npm install routerfy
```

# Usage

```javascript
const express = require('express')
const routerfy = require('routerfy')

const app = express()

//Generate routes from 'routes' directory
app.use(routerfy('routes'))

app.listen(8080)
```

# Example

Routes directory. Each JS file returns an [Express router](http://google.com)

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
```javascript
const express = require('express')
const routerfy = require('routerfy')

const app = express()

app.use('/api', routerfy('routes'))

/*
	Routes generated:
	/
	/foo
	/bar
	/dir
	/dir/foo
	/dir/bar
*/

app.listen(8080)
```
