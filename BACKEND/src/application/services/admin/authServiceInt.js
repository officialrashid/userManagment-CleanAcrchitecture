const authServiceInt =(repository)=>{

   console.log("admin service interface kerii");
   const adminBycriptPassword = (password) => repository.adminBycriptPassword(password)
   const compareAdminPassword =(password,adminPassword) => repository.compareAdminPassword(password,adminPassword)
   const bycriptPassword = (password) => repository.bycriptPassword(password)
   return{
    adminBycriptPassword,
    compareAdminPassword,
    bycriptPassword,
   }
}
export default authServiceInt