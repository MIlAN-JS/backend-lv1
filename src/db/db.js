// connecting database using mongoose

import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"




const connectDB = async ()=>{

    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  //returns a object?
      console.log(` \n MongoDb connected !! DB HOST : ${connectionInstance.connection.host}`); //please console.log connection INSTANCE  
      
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1) //   i have to check what is exit
    }
}



export default connectDB;