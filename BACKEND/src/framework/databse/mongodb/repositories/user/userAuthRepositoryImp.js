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
   const uploadImage = async(url,userId)=>{
    const user = await userdata.findByIdAndUpdate(userId,{image:url},{new:true})
    console.log(user);
    return user;
   }
   const getUsers = async(userId) =>{
    
    const getUser = await userdata.findById(userId);
       console.log(getUser,"get user i impl");
       return getUser;
   }
    return{
        userExist,
        createUser,
        uploadImage,
        getUsers
    }
}
export default userAuthRepositoryImp;
