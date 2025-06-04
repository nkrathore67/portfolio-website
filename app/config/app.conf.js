module.exports = {
    appName: "Portfolio Website",
    appVersion: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    sessionSecret: process.env.SESSION_SECRET || "your-session-secret",
    apiKeys: {
        google: process.env.GOOGLE_API_KEY || "your-google-api-key",
        facebook: process.env.FACEBOOK_API_KEY || "your-facebook-api-key"
    },
    logging: {
        level: process.env.LOG_LEVEL || "info",
        file: process.env.LOG_FILE || "logs/app.log"
    },
    features: {
        enableFeatureX: process.env.ENABLE_FEATURE_X === "true",
        enableFeatureY: process.env.ENABLE_FEATURE_Y === "true"
    }
};