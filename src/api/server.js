import mongoose from 'mongoose';
import express from 'express';
import path from 'path';
import { Schema } from 'mongoose';
const app = express();




app.get('/connect', async (req, res, err) => {

    const userInfo = new Schema({
        name: String,
        password: Number
    })

    
    const userInfoObj = mongoose.model('User',userInfo);
    userInfoObj.name = 'userName'
    userInfoObj.password = 'userPassword'

    await mongoose.connect('mongodb+srv://RAMADANgo:12345@myclustermongodb.6qjpxkx.mongodb.net/')
        .then(()=> {
            console.log('connected to database');
            userInfoObj.save();

        })
})

app.listen(3000, (req, res) => {
    console.log('listening on 3000...')
})