import register from "../../../application/useCase/user/register.js"

const authcontroller = (userAuthRepositoryInt, userAuthRepositoryImp, userSeriviceInt, userServiceImp) => {
    const dbRepository = userAuthRepositoryInt(userAuthRepositoryImp())
    const authService = userSeriviceInt(userServiceImp())
 
    const createuser = (req, res) => {
       console.log("controller keriiiiiiiiiiiiii",req.body);
       const { name, email, phone, password} = req.body
 
       register(name, email, phone, password, dbRepository, authService).then(() => {
 
       }).catch(() => {
 
       })
    }
 
    return {
       createuser
    }
 }
 
 export default authcontroller;