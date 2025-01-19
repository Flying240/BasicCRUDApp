const read = (req, res)=>{
    res.send("Hello, World!");
}

const User = require("../databaseModel/userModel.js");

const ReadALL = async (req, res)=>{
    try {
        //*! ///////////////////////////////////////
        const data = await User.find();
        //*! ///////////////////////////////////////
        
        // console.log({message: "Data Fetch Successfully", data});
        return res.status(200).json({message: "Data Fetch Successfully", data});   

    } catch (error) {
        console.error('Get Read error:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

const ReadOne = async (req, res)=>{
    try {
        //*! ///////////////////////////////////////
        const id = req.params.id;
        const data = await User.findById(id);

        if(!data){
            return res.status(400).json({message: `Data not found of ${id}`});
        }
        //*! ///////////////////////////////////////
        
        // console.log({message: `Data feteched of ${id}` , data});
        return res.status(200).json({message: `Data feteched of ${id}`, data});   

    } catch (error) {
        console.error('Get Read error:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
module.exports = {read, ReadALL, ReadOne};