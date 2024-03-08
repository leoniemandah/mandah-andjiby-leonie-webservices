const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
    
    const decodedToken = decodeJWT(token);
    if (!decodedToken || decodedToken.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
    req.user = decodedToken;
    next();
};
