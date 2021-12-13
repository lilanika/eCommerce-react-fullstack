/* this will be our connection file for mongoose */

import mongoose from 'mongoose'



const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://lila:apfelkuchen@cluster0.lj0j1.mongodb.net";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB


/* 

So now we're going to be connecting to our database through our application and we're going to use a
tool called Mongoose, which is object mapper. 

basically, it allows us to create a model and a schema for different resources in our database.like products and users and so on.

1. create a folder called Config and inside config db.js

So this is what this is going to be our database config file, our connection file, whatever you want to call it.

-  import Mongoose from mongoose and then we're going to create a function.

- create a function called connectDB it will be  asynchronous  with try and catch, because when we deal with MongoDB and mongoose we want to using methods like .find  this methods going to return a promise. 

-  import it  this file to server.js  and invoke the function connectDB()


*/