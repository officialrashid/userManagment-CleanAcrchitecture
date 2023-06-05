import { sign } from "crypto"
import register from "../../../application/useCase/user/register.js"
import loginClients from '../../../application/useCase/user/login.js'
const authcontroller = (userAuthRepositoryInt, userAuthRepositoryImp, userSeriviceInt, userServiceImp) => {
    const dbRepository = userAuthRepositoryInt(userAuthRepositoryImp())
    const authService = userSeriviceInt(userServiceImp())
 
    const createuser = (req, res) => {
       console.log("controller keriiiiiiiiiiiiii",req.body);
       const { name, email, phone, password} = req.body
 
       register(name, email, phone, password, dbRepository, authService).then((response) => {
              
         console.log(response,"response coming");
         res.json(response)
      
       }).catch(() => {
 
       })
    } 
 const loginUser = ( req,res) =>{
        
   const {email,password} = req.body
   console.log(req.body,"login bodyyyyyyyyyy");
   loginClients(email,password,dbRepository,authService).then((response)=>{
         console.log(response.status,";;;;;;;;;;;");
         if(response.status==true){
            res.json(response.status)
         }else{
            res.json(response.status)
         }
      
   }).catch(()=>{

   })
 }
    return {
       createuser,
       loginUser
    }
 }
 
 export default authcontroller;