const db = require('../services/db');

const newUser = (req, res, next) =>{
    console.log(req.body.name);
    db.query("INSERT INTO refer_user(companyId, name, status, referenceId, email) VALUES ($1, $2, $3, $4, $5);"
    ,[1, req.body.name, 'new', '123e4567-e89b-12d3-a456-426655440000', req.body.email]);
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