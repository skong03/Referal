const db = require('../services/db');

const newUser = (req, res, next) =>{
    console.log(req.body.name);
    res.json({message: "POST new user"});
};

//
const getUserById = (req, res, next) =>{
    const result = db.query("select * from refer_user", null);
    console.log(result);
    res.json({message: "get User By Id"+req.params.id}); 
};

const deleteUserById = (req, res, next) =>{
    res.json({message: "delete User By Id"+req.params.id}); 
};

module.exports = {newUser, getUserById, deleteUserById};