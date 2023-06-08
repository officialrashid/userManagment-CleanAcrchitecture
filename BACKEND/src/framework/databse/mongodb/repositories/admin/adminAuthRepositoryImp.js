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
  const updateUserDetails = async (userId, name, email, phone) => {
    try {
      const updateObj = {};
      if (name) updateObj.name = name;
      if (email) updateObj.email = email;
      if (phone) updateObj.phone = phone;
  
      const updatedUser = await UserData.findByIdAndUpdate(
        userId,
        updateObj,
        { new: true }
      );
  
      console.log("Updated user:", updatedUser);
      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const userExist =(email) =>UserData.findOne({email:email})
  const adminCreateUser =async(user) => {
    console.log(user,"imp");
    
    const users = await new UserData({
        name:user?.getname(),
        email:user?.getemail(),
        phone:user?.getphone(),
        password:user?.getpassword()
    })
  return users.save()
}
   return{
    adminExist,
    createAdmin,
    getAllUserList,
    deleteOneUser,
    updateUserDetails,
    userExist,
    adminCreateUser,
   }
}
export default adminAuthRepositoryImp;