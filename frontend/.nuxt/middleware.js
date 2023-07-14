const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['redirect'] = require('../middleware/redirect.js')
middleware['redirect'] = middleware['redirect'].default || middleware['redirect']

middleware['underDevelopment'] = require('../middleware/underDevelopment.js')
middleware['underDevelopment'] = middleware['underDevelopment'].default || middleware['underDevelopment']

export default middleware
