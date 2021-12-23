
/* its a seperate script that we can run to import data. we need to Import all this cause its not connected to our server. its seperatly */ 


import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {

 
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()


    // with insertMany we passing our useres Object into the dataBase
    //here we just want to store the first object of our array. 
    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    //for the products we creating a var to store our manipulated data 
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })
    // here we passing it to our Database 
    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}




