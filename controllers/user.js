const newUser = (req, res, next) =>{
    res.json({message: "POST new user"});
};

const getUserById = (req, res, next) =>{
    res.json({message: "get User By Id"+req.params.id}); 
};

const deleteUserById = (req, res, next) =>{
    res.json({message: "delete User By Id"+req.params.id}); 
};


module.exports = {newUser, getUserById, deleteUserById};