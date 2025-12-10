const jwt = require('jsonwebtoken');

const { supabase } = require('../config/supabase');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');

        // Fetch admin to check token version
        const { data: admin, error } = await supabase
            .from('admins')
            .select('id, token_version')
            .eq('id', decoded.id)
            .single();

        if (error || !admin) {
            return res.status(401).json({ message: 'Token invalid (User not found)' });
        }

        // Check token version
        const dbVersion = admin.token_version || 0;
        const tokenVersion = decoded.tokenVersion || 0;

        if (dbVersion !== tokenVersion) {
            return res.status(401).json({ message: 'Session expired. Please login again.' });
        }

        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
