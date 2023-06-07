const authServiceInt =(repository)=>{

   console.log("admin service interface kerii");
   const adminBycriptPassword = (password) => repository.adminBycriptPassword(password)
   const compareAdminPassword =(password,adminPassword) => repository.compareAdminPassword(password,adminPassword)
   return{
    adminBycriptPassword,
    compareAdminPassword
   }
}
export default authServiceInt