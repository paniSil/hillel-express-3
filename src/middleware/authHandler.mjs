const TOKEN = 'secret'

export const authHandler = (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(403).json({ message: 'No token provided' })
    }
    if (token !== TOKEN) {
        return res.status(401).json({ message: 'Unvalid token' })
    }

    next();
}

export const checkAccess = (req, res, next) => {
    const userRole = req.headers['x-user-role'];

    if (!userRole || (userRole !== 'admin' && userRole !== 'editor')) {
        return res.status(403).send('Forbidden: Insufficient access rights to articles.');
    }
    next();
}