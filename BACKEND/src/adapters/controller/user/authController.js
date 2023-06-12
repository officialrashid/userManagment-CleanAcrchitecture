import { sign } from "crypto"
import register from "../../../application/useCase/user/register.js"
import loginClients from '../../../application/useCase/user/login.js'
import uploadImage from "../../../application/useCase/user/uploadProfile.js"
import getUsers from "../../../application/useCase/user/getUser.js"
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
            res.json(response)
         }else{
            res.json(response)
         }
      
   }).catch(()=>{

   })
 }
 const updateProfile = (req, res) => {
   console.log(req.body, "updateprofile is coming");
   const { url, userId } = req.body;
   uploadImage(url, userId, dbRepository, authService)
     .then((userdata) => {
       console.log(userdata, "profile response in controller");
       res.json(userdata);
     })
     .catch((error) => {
       console.log(error);
       res.status(500).json({ error: 'Internal server error' });
     });
 };
 const getUser = (req,res)=>{
    
     console.log(req.params.id,"sddsdsdsd");
     const userId = req.params.id
     getUsers(userId,dbRepository,authService).then((response)=>{
       console.log(response,"llllllllllllllllll");
       res.json(response)
   })
 }
 return {
   createuser,
   loginUser,
   updateProfile,
   getUser
 };
 }
 
 export default authcontroller;