const errNext = (err, flag, msg, res) => {
    if (flag) {
        const code = err.statusCode;
        return res.status(code).json({
            status: err.status,
            message: err.message,
            data: err.data.message,
        });
    }
    return res.status(500).json({
        status: 'error',
        message: err.message || msg,
        error: 'Internal Server Error',
    });
};

module.exports = { errNext };