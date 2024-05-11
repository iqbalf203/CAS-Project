import userService from "../services/user.service.js";

const isAdmin = async (req, res, next) => {
    let resp;
if(req.params && req.params.id){
    resp = await userService.getUserById(req.params.id);
}
else{
    resp = req.body;
}
    if (resp && resp.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized: Admin access required' });
    }
};

const isCitizen = async (req, res, next) => {
    let resp;
    if(req.params && req.params.id){
        resp = await userService.getUserById(req.params.id);
    }
    else{
        resp = req.body;
    }

    if (resp && resp.role === 'citizen') {
        next(); 
    } else {
        res.status(403).json({ message: 'Unauthorized: Citizen access required' });
    }
};

const isCitizenOrAdmin = async (req, res, next) => {

    let resp;
    if(req.params && req.params.id){
        resp = await userService.getUserById(req.params.id);
    }
    else{
        resp = req.body;
    }

    if ((resp && resp.role === 'citizen') || (resp && resp.role === 'admin')) {
        next(); // User is either a citizen or an admin, proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: 'Unauthorized: Citizen or Admin access required' });
    }
};

export { isAdmin, isCitizen, isCitizenOrAdmin };
