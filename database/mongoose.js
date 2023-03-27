const mongoose=require('mongoose')
mongoose.set('strictQuery',true)
// const url="mongodb://127.0.0.1:27017"
const url='mongodb+srv://shiva_pabbu:shiva000@cluster0.aaitgpp.mongodb.net/persons?retryWrites=true&w=majority';
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
