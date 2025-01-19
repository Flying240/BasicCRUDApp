/**
    1) get req params and body
    2) check data (not-null).
    3) call the object by it's name from database (if exists)
    4) create a new object with given data.
    5) save the object in database.
*/

const User = require('../databaseModel/userModel.js');

const Add = async (req, res) => {
    try { 
        //*! ///////////////////////////////////////
        const { name, age} = req.body;
        if (!name || !age) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        const userExists = await User.findOne({ name });
        if (userExists) {
            console.log({ message: 'User already exists' });
            return res.status(400).json({ message: 'User already exists' });
        }
        
        // Create a new user
        const newUser = new User({ name, age});
        await newUser.save();
        //*! ///////////////////////////////////////

        console.log({ message: 'User created successfully', newUser});
        return res.status(200).json({ message: 'User created successfully', newUser}); // 201 Created is more appropriate

    } catch (error) {
        console.error('Post Create error:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = { Add };
