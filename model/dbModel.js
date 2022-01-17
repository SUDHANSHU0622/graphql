import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    place:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

const postModel = mongoose.model('apollo',postSchema)

export default postModel