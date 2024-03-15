require("dotenv").config();

const jwt = require('jsonwebtoken');



const createJWT=()=>{
    let payload ={name:'XuanAnh',address:'tphcm'};
    let key = process.env.JWT_SECRET;
    let token= null;
    try{
         token = jwt.sign(payload,key);
         console.log(token);
    }catch(err){
        console.log(err)

    }
    
  

    return token;

    
}

const verifytoken =(token)=>{
    let key = process.env.JWT_SECRET;
    let data = null;
    try{
        let deceded =jwt.verify(token, key);
        data=deceded;
    }catch(e){
        console.log(err);
    }
    return data;
   

}
module.exports={
    createJWT,verifytoken
}