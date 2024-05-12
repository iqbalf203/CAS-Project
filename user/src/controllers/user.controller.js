import userService from '../services/user.service.js';
import { generateToken } from '../services/auth.service.js';
import { isAdmin,isCitizen } from '../middleware/middleware.js';
import { sendEmail } from '../services/email.service.js';


const getAllUsers = async (req, res,) => {
    console.log('controller');
    try {
        const users = await userService.getAllCitizenUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    console.log('controller');
    const userId = req.params.id;
    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user; // Attach user object to req
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const registerUser = async (req, res) => {
    console.log('controller');
    console.log(req.body);
    try {
        const user = await userService.registerUser(req.body);
        sendEmail(user.email,'Welcome to City Administration System!', user)
        res.status(201).json(user);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    console.log('controller');
    console.log(req.body);
    try {
        const user = await userService.loginUser(req.body);
        // req.user = user; // Attach user object to req
        const token = generateToken(user);
        res.status(200).json({ user, token,'registration:':user.registrationDate.getFullYear});
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const updateUserProfile = async (req, res) => {
    console.log('controller');
    console.log(req.body);
    console.log(req.params.id); 
    const userId = req.params.id;
    const updatedData = req.body;
    try {
        const updatedUser = await userService.updateUserProfile(userId, updatedData);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export {getAllUsers,getUserById, registerUser, loginUser, updateUserProfile };