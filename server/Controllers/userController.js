const userModel = require("../Models/userModels")
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");


const registerUser = async(req, res) => {
    const {name, email, password} = req.body
    let user = await userModel.findOne({email})
}



module.exports = { registerUser }