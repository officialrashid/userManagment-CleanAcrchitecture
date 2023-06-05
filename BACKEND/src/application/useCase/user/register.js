import userdata from "../../../entities/user.js";


const register = async (name, email, phone, password, repositories, authService) => {
   
   return repositories.userExist(email).then(async (user) => {
      if (!user) {
         const bycriptPassword = await authService.bycriptPassword(password)
         console.log(bycriptPassword,"bcryp is cminh");
         const userDetails = userdata(name, email, phone, bycriptPassword)
         console.log(userDetails,"usedetails is comng");
         const createUser = await repositories.createUser(userDetails)
         console.log(createUser)
      }
   })
}
export default register