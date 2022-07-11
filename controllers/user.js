const db = require('../services/db');
const { v4: uuidv4 } = require('uuid');

const newUser = (req, res, next) =>{
    console.log(req.body.name);
    //uuid is passed in userid. as reference of outside userId.
    const uuid=uuidv4();
    
    db.query("INSERT INTO refer_user(companyId, name, status, referenceId, email) VALUES ($1, $2, $3, $4, $5);"
    ,[1, req.body.name, 'new', uuid, req.body.email]);
    res.json({message: "POST new user"});
};

const getUserById = (req, res, next) =>{
    db.query("select * from refer_user", null);
    res.json({message: "get User By Id"+req.params.id}); 
};

const deleteUserById = (req, res, next) =>{
    res.json({message: "delete User By Id"+req.params.id}); 
};

module.exports = {newUser, getUserById, deleteUserById};