import userService from "../services/user.service.js";

const isAdmin = async (req, res, next) => {
    let resp;
    try {
        if (req.params && req.params.id) {
            resp = await userService.getUserById(req.params.id);
            if (!resp) {
                return res.status(404).json({ message: 'User not found' });
            }
        }
        else {
            resp = req.body;
        }
    } catch (error) {
        return res.status(500).json({ message: 'User not found' });
    }

if (resp && resp.role === 'Admin') {
    next();
} else {
    res.status(403).json({ message: 'Unauthorized: Admin access required' });
};
}

const isCitizen = async (req, res, next) => {
    let resp;
    try {
        if (req.params && req.params.id) {
            resp = await userService.getUserById(req.params.id);
            if (!resp) {
                return res.status(404).json({ message: 'User not found' });
            }
        }
        else {
            resp = req.body;
        }
    } catch (error) {
        return res.status(500).json({ message: 'User not found' });
    }

    if (resp && resp.role === 'Citizen') {
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized: Citizen access required' });
    }
};

const isCitizenOrAdmin = async (req, res, next) => {
    let resp;
    try {
        if (req.params && req.params.id) {
            resp = await userService.getUserById(req.params.id);
            if (!resp) {
                return res.status(404).json({ message: 'User not found' });
            }
        }
        else {
            resp = req.body;
        }
    } catch (error) {
        return res.status(500).json({ message: 'User not found' });
    }

    if ((resp && resp.role === 'Citizen') || (resp && resp.role === 'Admin')) {
        next(); // User is either a citizen or an admin, proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: 'Unauthorized: Citizen or Admin access required' });
    }
};

export { isAdmin, isCitizen, isCitizenOrAdmin };
