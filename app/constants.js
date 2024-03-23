const {
    JWT_SECRET_KEY,
    DATABASE_URI,
    SERVER_PORT,
    TOKEN_EXPIRATION_DURATION,
} = process.env;

module.exports = {
    JWT_SECRET_KEY,             // Exporting JWT_SECRET_KEY
    SERVER_PORT,                // Exporting SERVER_PORT
    DATABASE_URI,               // Exporting DATABASE_URI
    TOKEN_EXPIRATION_DURATION   // Exporting TOKEN_EXPIRATION_DURATION
};