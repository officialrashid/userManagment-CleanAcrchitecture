
const adminSignIn = async (email,password,repositories,authService) =>{
     
    return repositories.adminExist(email).then(async(admin)=>{

       if(admin.email && admin.password){
          
        return authService.compareAdminPassword(password,admin.password).then(async (isPassword)=>{

            if(isPassword){
                console.log("success admin comparing and perfect done");
                const admindata ={
                
                    _id : admin._id,
                    email:admin.email
      
                  }
                  const accessToken = await authService.createAccessToken(admindata)
               const refreshToken = await authService.createRefreshToken(admindata)
               console.log(accessToken,"access token admin usecase ethiii adminin");
               console.log(refreshToken,"refresh token usecase  ehii makkale adminin");
                return ({ status: true,accessToken:accessToken,refreshToken:refreshToken,adminInfo:admindata });
            }else{
                return { status: false };
            }
        })
       }else{
        return { message: "Invalid email or password", status: false };
       }
    })
}
export default adminSignIn