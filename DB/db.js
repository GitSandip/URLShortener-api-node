import mongoose from 'mongoose'

const url="mongodb://localhost:27017/URL-shortner"
const Connection=async ()=>{
    try{
        await mongoose.connect(url,{useUnifiedTopology:true});
        console.log("database connected...")
    }catch(e){
        console.log("database..",e.message);

    }
}

export default Connection;