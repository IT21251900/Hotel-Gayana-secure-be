const rateLimit = require('express-rate-limit');

// General Rate Limiter 
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, 
    handler: (req, res) => {
        res.status(429).json({
            success: false,
            message: 'Too many requests, please try again later.'
        });
    },
    headers: true,
});

// Login Rate Limiter 
const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 5, 
    handler: (req, res) => {
        res.status(429).json({
            success: false,
            message: 'Too many login attempts, please try again later.'
        });
    },
    headers: true,
});

// Password Reset Rate Limiter 
const passwordResetLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5, 
    handler: (req, res) => {
        res.status(429).json({
            success: false,
            message: 'Too many password reset attempts, please try again later.'
        });
    },
    headers: true,
});

module.exports = {
    generalLimiter,
    loginLimiter,
    passwordResetLimiter
};