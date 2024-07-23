const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: "Authorization header missing or not in the correct format"
        });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log("Decoded Token:", decoded); // Log decoded token for debugging
        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({
                message: "Invalid token"
            });
        }
    } catch (err) {
        console.error("Token verification error:", err); // Log the error for debugging
        return res.status(403).json({
            message: "Token verification failed"
        });
    }
};

module.exports = {
    authMiddleware
};
