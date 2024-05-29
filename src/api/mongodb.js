import mongoose from "mongoose";
import test from "node:test";
import { Schema } from "mongoose";

mongoose.connect('mongodb+srv://RAMADANgo:12345@myclustermongodb.6qjpxkx.mongodb.net/')

const schema = new Schema({
    name: String
});

const model = mongoose.model('test', schema);
const testModel = new model();


testModel._id = 1
await testModel.save();