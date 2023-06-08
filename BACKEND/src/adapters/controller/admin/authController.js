
import adminRegister from "../../../application/useCase/admin/adminRegister.js"
import adminSignIn from "../../../application/useCase/admin/adminLogin.js"
import getAllUsers from "../../../application/useCase/admin/userList.js"
import deleteOneUser from "../../../application/useCase/admin/deleteUser.js"
import updateUserDetails from "../../../application/useCase/admin/editUser.js"
import adminAddUsers from "../../../application/useCase/admin/adminAddUser.js"
const authController = (adminAuthRepositoryInt,adminAuthRepositoryImp,adminSeriviceInt,adminServiceImp) =>{

    const dbRepository = adminAuthRepositoryInt(adminAuthRepositoryImp())
    const authService = adminSeriviceInt(adminServiceImp())

    const createadmin = (req,res)=>{
       
        const {email,password} = req.body

        adminRegister(email,password,dbRepository,authService).then((response)=>{

        res.json(response)

        }).catch(()=>{

        })
        
    }
    const adminLogin =(req,res) =>{

        const {email,password} = req.body
        adminSignIn(email,password,dbRepository,authService).then((response)=>{
            console.log(response.status,";;;;;;;;ooo");
            if(response.status==true){
                res.json(response.status)
             }else{
                res.json(response.status)
             }
        }).catch(()=>{

        }) 
    }
    const userList = (req, res) => {
        getAllUsers(dbRepository, authService)
          .then((response) => {
            console.log("controller list usser responser",response);
            res.json(response);
          })
          .catch((error) => {
            res.status(500).json({ error: error.message });
          });
      };
      const deleteUser = (req,res) =>{
         console.log("pppppppppp");
        console.log("66666666llllllllll",req.body.userId);
        const {userId} = req.body
        deleteOneUser(userId,dbRepository,authService).then((response)=>{
               res.json(response);
        }).catch((error)=>{
            console.log(error);
        })
      }
      const adminEditUser = (req,res) =>{
         
        console.log(req.body,"'''''''");
        const {_id,name,email,phone} = req.body
        updateUserDetails(_id,name,email,phone,dbRepository,authService).then((response)=>{
            res.json(response)
        }).catch(()=>{

        })
      }
      const adminAddUser = (req,res) =>{

        const {name,email,phone,password} = req.body

        adminAddUsers(name,email,phone,password,dbRepository,authService).then((response)=>{
            
          res.json(response)
        }).catch((error)=>{
          console.log(error);
        })
      }
    return{
        createadmin,
        adminLogin,
        userList,
        deleteUser,
        adminEditUser,
        adminAddUser
    }
}
export default authController