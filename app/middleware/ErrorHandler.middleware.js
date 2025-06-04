module.exports = (err, req, res, next) => {
    console.error(err.stack);
    
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
            status: err.status || 500
        }
    });
};