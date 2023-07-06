import mongoose from "mongoose";

let isConnected = false;

export const connecToDb = async () =>{
  mongoose.set('strictQuery', true);

  if(isConnected){
    console.log('MongoDb is already connected')
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      dbName: 'share_prompts',
      useNewUrlParse:true,
      useUnifiedTopology:true
    })
    isConnected= true;
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}