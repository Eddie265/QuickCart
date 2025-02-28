import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

<<<<<<< HEAD
// inngest function to save user data to database
=======
<<<<<<< HEAD
// inngest function to save user data to database
=======
//inngest Fuction to save user data to database
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
    { event: 'clerk/user.created'},
    async ({event}) =>{
        const { id,first_name, last_name, email_addresses, image_url} =event.data
        const userData = {
            _id:id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
<<<<<<< HEAD
=======
=======
    {event:'clerk/user.created'},
    async ({event}) =>{
        const {id,first_name,last_name,email_addresses,image_url} = event.data
        const userData ={
            _id:id,
            email:email_addresses[0].email_address,
            name: first_name + '' + last_name,
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
            imageUrl:image_url
        }
        await connectDB()
        await User.create(userData)
    }
)

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
// inngest function to update user data in database
export const syncUserUpdation = inngest.createFunction({
    id: 'update-user-from-clerk'
},
{ event: 'clerk/user.updated'},
async({event}) => {
    const { id,first_name, last_name, email_addresses, image_url} =event.data
        const userData = {
            _id:id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl:image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id,userData)
}
)
// inngest function to delete user from database
<<<<<<< HEAD
=======
=======
// Inngest function to update user data in database
export const syncUserUpdation = inngest.createFunction(
    {
        id:'update-user-from-clerk'
    },
    { event: 'clerk/user.updated' },
    async ({event}) => {
        const {id,first_name,last_name,email_addresses,image_url} = event.data
        const userData ={
            _id:id,
            email:email_addresses[0].email_address,
            name: first_name + '' + last_name,
            imageUrl:image_url
        }
        await connectDB()
        await User.findByyIdAndUpdate(id,userData)
    }
)

// inngest Function to delete user from database
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clerk'
    },
<<<<<<< HEAD
    { event: 'clerk/user.deleted'},
    async ({event}) =>{
        const {id } = event.data
=======
<<<<<<< HEAD
    { event: 'clerk/user.deleted'},
    async ({event}) =>{
        const {id } = event.data
=======
    {
        event: 'clerk/user.deleted' },
    async ({event}) => {
        
        const {id} = event.data
>>>>>>> 0c180de51ba14f966685c84f248e3857c6038244
>>>>>>> 63dccd3627861f62e282a959b2e6838320e2792f

        await connectDB()
        await User.findByIdAndDelete(id)
    }
)