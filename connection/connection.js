const mongoose = require('mongoose')

const url = "mongodb+srv://vkgoldy:vkgoldy@stirring.lfnzeij.mongodb.net/Novelti_Solutions?retryWrites=true&w=majority";

mongoose.connect(url
).then(() => {
    console.log('Connected to Database Successfullt....!')
}).catch(() => {
    console.log('Failed to connect...')
})