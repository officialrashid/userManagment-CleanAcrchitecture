
const adminAuthRepositoryInt =(repositories)=>{
   
    console.log("admin auth interface kerii");
    const adminExist = (email) => repositories.adminExist(email)
    const createAdmin =(admin) => repositories.createAdmin(admin)
    const getAllUserList = () => repositories.getAllUserList()
    const deleteOneUser = (userId) => repositories.deleteOneUser(userId)
    return{
        adminExist,
        createAdmin,
        getAllUserList,
        deleteOneUser
    }

}
export default adminAuthRepositoryInt