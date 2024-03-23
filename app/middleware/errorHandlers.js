const errorHandler = (error, req, res, next) => {
    console.info('Error Handler Middleware Fired.')
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: error.message,
        error: error.stack
    })
}

module.exports = errorHandler