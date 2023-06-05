import userdata from "../../models/userModels/userModels.js";
const userAuthRepositoryImp=()=>{

    console.log("impl keri");
    const userExist =(email) =>userdata.findOne({email:email})
    
    const createUser =async(user) => {
        console.log(user,"imp");
        
        const users =await new userdata({
            name:user?.getname(),
            email:user?.getemail(),
            phone:user?.getphone(),
            password:user?.getpassword()
        })
      return users.save()
    }
    return{
        userExist,
        createUser
    }
}
export default userAuthRepositoryImp