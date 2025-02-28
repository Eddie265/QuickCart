import mongoose from "mongoose";
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import { unique } from "next/dist/build/utils";
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
const userSchema = new mongoose.Schema({
    _id:{ type : String, required:true},
    name: { type : String, required:true},
    email: { type : String, required:true, unique:true},
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
    imageUrl: {type : String, required:true},
    cartItems: {type : Object, default:{}}
}, { minimize: false})

const User = mongoose.models.user|| mongoose.model('user',userSchema)
<<<<<<< HEAD
=======
=======
    imageUrl : { type : String, required:true},
    cartItems: { type : Object, default: {} }
},{minimize: false})

const User = mongoose.models.user || mongoose.model('user',userSchema)
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f

export default User