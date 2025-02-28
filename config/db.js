import mongoose from "mongoose";

let cached = global.mongoose

if (!cached) {
<<<<<<< HEAD
    cached = global.mongoose = { conn: null, promise: null}
}

async function connectDB() {
    
    if (cached.conn) {
        return cached.conn
    }

=======
    cached = global.mongoose = {conn: null, promise: null}
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn
    }
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
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