const express = require('express')
const userModel = require('../models/users');


// get all user
exports.getUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find()
        res.status(200).json({
            status: "success",
            allUsers
        })
    } catch (e) {
        res.status(401).json({
            message: e.message
        })
    }
}

// create new users
exports.createUsers = async (req, res) => {
    // const userId = Math.floor(Math.random() * 1000) + 1;
    try {
        const { firstName, lastName, email, mobile, address1, address2, state, country, zip } = req.body;

        if (!firstName || !lastName || !email || !mobile || !address1 || !zip) {
            return res.status(400).json({
                status: "failed",
                message: 'Plese enter required filed',

            })
        }
        if (firstName.length < 5) {
            return res.status(400).json({
                status: "failed",
                message: 'Firstname should be atleast 5 character long',

            })
        }
        if (mobile.toString().length < 10) {
            return res.status(400).json({
                status: "failed",
                message: 'Mobile number contains 10 digits',

            })
        }
        if (lastName.length < 5) {
            return res.status(400).json({
                status: "failed",
                message: 'Lastname should be atleast 5 character long',

            })
        }
        if (zip.toString().length < 6) {
            return res.status(400).json({
                status: "failed",
                message: 'Zip code should be 6 character long',

            })
        }
        if (await userModel.findOne({ email })) {
            return res.status(400).json({
                status: "failed",
                message: 'Email id is already exist',

            })
        }
        const newUser = await userModel.create(
            // userID: `${req.body.firstName}${userId}`,
            // firstName: req.body.firstName, lastName: req.body.lastName,
            // email: req.body.email, mobile: req.body.mobile, address1: req.body.address1,
            // address2: req.body.address2, state: req.body.state,
            // country: req.body.country, zip: req.body.zip
            req.body
        )
        res.status(201).json({
            status: "success",
            message: 'User crated successfully..!',
            newUser
        })

    } catch (e) {
        res.status(401).json({
            message: e.message
        })
    }
}

// delete user
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.deleteOne({ _id: req.params.id })
        return res.status(200).json({
            status: "success",
            message: "user deleted successfully.",
            deletedUser
        });
    } catch (e) {
        res.status(401).json({
            message: e.message
        })
    }
}

//get single user
exports.getUser = async (req, res) => {
    try {
        const getUser = await userModel.findOne({ _id: req.params.id })
        return res.status(200).json({
            status: "success",
            message: "User found successfully.",
            getUser
        });
    } catch (e) {
        res.status(401).json({
            message: e.message
        })
    }
}
// update user
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.updateOne({ _id: req.params.id }, { $set: req.body })
        return res.status(200).json(
            // status: "success",
            // message: "User updated successfully.",
            updatedUser
        );
    } catch (e) {
        res.status(401).json({
            message: e.message
        })
    }
}