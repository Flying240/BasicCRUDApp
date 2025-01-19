/**
    1) get req params or body
    2) call the object by it's id from database
    3) delete object 
*/

const User = require('../databaseModel/userModel.js');

const Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const userByID = await User.findById(id);
        if(!userByID){
            return res.status(400).json({message: 'User not found'});
        }

        const deletedUser = await User.findByIdAndDelete(id);
        console.log(`user id ${id} deleted\n`, deletedUser);
        res.status(200).json({mssage: `user id ${id} deleted`, deletedUser});

    } catch (error) {
        console.log('Delete error\n', error);
        res.status(500).send({ message: 'Delete error', error: error.message });
    }
}

module.exports = {Delete};