import adminData from "../../models/adminModels/adminModels.js";
import UserData from "../../models/userModels/userModels.js";
const adminAuthRepositoryImp =()=>{

   console.log("adminauth impl keriii");
   const adminExist =(email) =>adminData.findOne({email:email})
   const createAdmin = async(admin)=>{
     
    const admins = await new adminData({
      
        email:admin?.getemail(),
        password:admin?.getpassword()
    })
    return admins.save()
   }
   const getAllUserList = async () => {
    try {
      const userList = await UserData.find();
      return userList;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  const deleteOneUser = async (userId) => {
    try {
      const deletedUser = await UserData.findByIdAndDelete(userId);
      return deletedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
   return{
    adminExist,
    createAdmin,
    getAllUserList,
    deleteOneUser
   }
}
export default adminAuthRepositoryImp;