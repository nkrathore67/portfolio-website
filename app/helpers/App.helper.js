module.exports = {
    formatDate: (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    },

    generateRandomString: (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    },

    sanitizeInput: (input) => {
        return input.replace(/<[^>]*>/g, ''); // Simple HTML tag removal
    },

    responseHandler: (res, status, message, data = null) => {
        res.status(status).json({
            message,
            data
        });
    }
};