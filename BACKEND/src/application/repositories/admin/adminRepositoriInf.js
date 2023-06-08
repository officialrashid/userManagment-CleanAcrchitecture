
const adminAuthRepositoryInt =(repositories)=>{
   
    console.log("admin auth interface kerii");
    const adminExist = (email) => repositories.adminExist(email)
    const createAdmin =(admin) => repositories.createAdmin(admin)
    const getAllUserList = () => repositories.getAllUserList()
    const deleteOneUser = (userId) => repositories.deleteOneUser(userId)
    const updateUserDetails = (userId,name,email,phone) => repositories.updateUserDetails(userId,name,email,phone)
    const userExist = (email) =>repositories.userExist(email)
    const adminCreateUser = (userDetails) => repositories.adminCreateUser(userDetails)
    return{
        adminExist,
        createAdmin,
        getAllUserList,
        deleteOneUser,
        updateUserDetails,
        userExist,
        adminCreateUser
    }

}
export default adminAuthRepositoryInt