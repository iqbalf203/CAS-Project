import User from '../models/user.model.js';


const getAllCitizenUsers = async () => {
    console.log('service');
    try {
        const users = await User.find({ role: 'citizen' });
        return users;
    } catch (error) {
        throw new Error('Failed to fetch citizen users');
    }
};

const getUserById = async (userId) => {
    console.log('service');
    console.log(userId);
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw new Error('Failed to fetch user by ID');
    }
};

const registerUser = async (userData) => {
    console.log('service');
    console.log(userData);
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        if (error.message.includes('duplicate key')) {
            throw new Error(`USER_ALREADY_EXIST: User with ${userData.username} already exist!`);
        } else {
            throw new Error('Registration failed. Please try again.');
        }
    }
};

const loginUser = async (credentials) => {
    console.log('service');
    console.log(credentials);
    const { username, password } = credentials;
    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            throw new Error('Invalid username or password');
        }
        return user;
    } catch (error) {
        throw new Error('Login failed. Please check your credentials.');
    }
};

const updateUserProfile = async (userId, updatedData) => {
    // console.log('service');
    // console.log(updatedData);
    // console.log(userId);
    try {
        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Failed to update user profile');
    }
};

const userService = {getAllCitizenUsers,getUserById, registerUser, loginUser, updateUserProfile };

export default userService;