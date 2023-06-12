
const authServiceInt =(repository)=>{

   console.log("admin service interface kerii");
   const adminBycriptPassword = (password) => repository.adminBycriptPassword(password)
   const compareAdminPassword =(password,adminPassword) => repository.compareAdminPassword(password,adminPassword)
   const bycriptPassword = (password) => repository.bycriptPassword(password)
   const createAccessToken = (admindata) => repository.createAccessToken(admindata)
   const createRefreshToken = (admindata) => repository.createRefreshToken(admindata)
   return{
    adminBycriptPassword,
    compareAdminPassword,
    bycriptPassword,
    createAccessToken,
    createRefreshToken
   }
}
export default authServiceInt