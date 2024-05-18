import userService from '../services/user.service.js';
import { generateToken } from '../services/auth.service.js';
import { sendEmail } from '../services/email.service.js';


const getAllCitizens = async (req, res,) => {
    console.log('controller');
    try {
        const users = await userService.getAllCitizenUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllEmployees = async (req, res,) => {
    console.log('controller');
    try {
        const users = await userService.getAllEmployees();
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

const getUserByUserName = async (req, res) => {
    console.log('controller');
    try {
        console.log(req)
        const user = await userService.getUserByUserName(req.body.username);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const newPassword = Math.random().toString(36).substring(2, 12);
        const updatedUser = await userService.updateUserProfile(user.id,{password: newPassword});
        sendEmail(updatedUser,'Your Password Has Been Successfully Reset','forgotPassword', updatedUser)
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
        sendEmail(user,'Welcome to City Administration System!','welcome', user)
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

const deleteEmployee = async (req,res)=>{
    const employeeId = req.params.id;
    try {
        const resp = await userService.deleteEmployee(employeeId)
        res.status(200).json(resp)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getAllCounts = async (req,res)=>{
    const resp = await userService.counts()
    res.status(200).json(resp)
}

export {getAllCitizens, getAllEmployees,getUserById,getUserByUserName, registerUser, loginUser, updateUserProfile, deleteEmployee, getAllCounts };