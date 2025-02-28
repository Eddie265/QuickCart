import mongoose from "mongoose";
<<<<<<< HEAD

=======
import { unique } from "next/dist/build/utils";
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
const userSchema = new mongoose.Schema({
    _id:{ type : String, required:true},
    name: { type : String, required:true},
    email: { type : String, required:true, unique:true},
<<<<<<< HEAD
    imageUrl: {type : String, required:true},
    cartItems: {type : Object, default:{}}
}, { minimize: false})

const User = mongoose.models.user|| mongoose.model('user',userSchema)
=======
    imageUrl : { type : String, required:true},
    cartItems: { type : Object, default: {} }
},{minimize: false})

const User = mongoose.models.user || mongoose.model('user',userSchema)
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244

export default User