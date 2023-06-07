
const adminSignIn = async (email,password,repositories,authService) =>{
     
    return repositories.adminExist(email).then(async(admin)=>{

       if(admin.email && admin.password){
          
        return authService.compareAdminPassword(password,admin.password).then((isPassword)=>{

            if(isPassword){
                console.log("success admin comparing and perfect done");
                return { status: true };
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