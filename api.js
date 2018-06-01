const express = require('express')
const router = express.Router()

/**
 * Middleware for security check
 * validate signature
 */
router.use('*', (req, res, next)=>{
    let signature = req.get('signature')
    if(signature){
        if(signature === 'abc'){
            next()
        } else {
            next(new Error('Invalid signature'))
        }
    } else {
        next(new Error('Signature required'))
    }
})

/**
 * Enable employee api
 */
router.use('/employee', require('./employee-api'))

/**
 * Catch if requested api not exists
 */
router.use((req, res, next) => {
	var err = new Error('Not Found')
	err.status = 404
	next(err)
})

/**
 * catch all error then send error message to the client
 */
router.use((err, req, res, next) => {
	res.status(err.status || 500).send(err.message)
})

module.exports = router
