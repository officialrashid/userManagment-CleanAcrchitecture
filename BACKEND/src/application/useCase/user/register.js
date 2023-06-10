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
         const registeredUser = {

            userId: createUser?._id,
            name: createUser?.name,
            email: createUser?.email
        }
         const accessToken = await authService.createAccessToken(registeredUser)
         const refreshToken = await authService.createRefreshToken(registeredUser)
         console.log(accessToken,"lllllllllllllll");
         console.log(refreshToken,"jjjjjjjjjjjjj");
         return ({ status: true, accessToken: accessToken, refreshToken: refreshToken,userInfo:registeredUser,createUser });
      }else{
         return {message:'email already exists'}
      }
     
   })
}
export default register