import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const secretKey = crypto.randomBytes(32).toString('hex');

const authenticateJWT = (req, res, next) => {
    console.log('authenticateJWT');
    if (req.path === '/register' || req.path === '/login')
        return next();

    const bearerToken = req.headers.authorization;
    let token = '';

    if (bearerToken)
        token = bearerToken.split(" ")[1];

    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.error('JWT verification error:', err);
                return res.status(403).json({ message: 'Failed to authenticate token' });
            } else {
                console.log(decoded);
                req.user = decoded;
                next();
            }
        });
    } else {
        console.error('No token provided');
        res.status(401).json({ message: 'No token provided' });
    }
};

const generateToken = (user) => {
    console.log('generateToken');
    const userObject = user.toObject();
    const token = jwt.sign(userObject, secretKey, { expiresIn: '1h' });
    return token;
};

export { authenticateJWT, generateToken };