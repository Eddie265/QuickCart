import mongoose from "mongoose";

let cached = global.mongoose

if (!cached) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
    cached = global.mongoose = { conn: null, promise: null}
}

async function connectDB() {
    
    if (cached.conn) {
        return cached.conn
    }

<<<<<<< HEAD
=======
=======
    cached = global.mongoose = {conn: null, promise: null}
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn
    }
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
    if (!cached.promise) {
        const opts = {
            bufferCommands:false
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`,opts).then(mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB