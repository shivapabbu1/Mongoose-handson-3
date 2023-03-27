const mongoose=require('mongoose')

const url='mongodb://127.0.0.1:27017/persons';
 const connect =async ()=>{
    try {
        console.log("connected to mongodb..");
         const dbconn=await mongoose.connect(url);
         console.log("connected=>",dbconn);

    } catch (error) {
        console.log("your erros in connect to db",error);
        
    }
   
 }


 module.exports= connect;
