import userdata from "../../../entities/user.js";
const adminAddUsers = async (name,email,phone,password,repositories,authService) =>{
        
    await repositories.userExist(email).then(async(user)=>{
        if (!user) {
            const bycriptPassword = await authService.bycriptPassword(password)

            console.log(bycriptPassword,"bcryp Add user is cminh");

            const userDetails = userdata(name, email, phone, bycriptPassword)
            console.log(userDetails,"usedetails add user is comng");
            const adminCreateUser = await repositories.adminCreateUser(userDetails)
            console.log(adminCreateUser,"vannttankda")
            return{
                adminCreateUser
            }
         }else{
            return {message:'email already exists'}
         }
    })
} 
export default adminAddUsers