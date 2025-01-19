/**
    1) get req params and body
    2) call the object by it's id from database
    3) keep only non-null data 
    4) update the object with updated data.
    5) save the object in database.
*/

const User = require('../databaseModel/userModel.js');

const Edit = async(req, res)=>{
    try {
        //*! //////////////////////////////
        const id = req.params.id;
        
        //find id exist or not
        const userByID = await User.findById(id);
        if(!userByID){
            return res.status(400).json({message: 'User not found'});
        }

        const newName = req.body.name, newAge =  req.body.age;
        if (!newName && !newAge) {
            return res.status(400).json({ message: 'any one field is required' });
        }

        //* ///////////////////////////////////////////////////////
        
        // Prepare the update object
        const updatedData = {};
        if(newName){ 
            const userByName = await User.findOne({name: newName});
            if(userByName){
                console.log({message: 'User name already exists'});
                return res.status(400).json({message: 'User name already exists'});
            }

            updatedData.name = newName;
        }
        if(newAge) updatedData.age = newAge;
        
        //update it
        Object.assign(userByID, updatedData); // Update the fields in the user object
        const updatedUser = await userByID.save();
        //*! //////////////////////////////
        
        res.status(200).json(updatedUser);
        console.log(`user id ${id} updated\n`, updatedUser);
    
    } catch (error) {
        console.log('Post Edit error\n', error);
        res.status(500).send({ message: 'Post Edit error', error: error.message });
    }
}

module.exports = {Edit};