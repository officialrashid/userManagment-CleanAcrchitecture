
const updateUserDetails = async(userId,name,email,phone,repositories,authService) =>{
      
    await repositories.updateUserDetails(userId,name,email,phone).then((response)=>{
             
        console.log("edit user success",response);
        return{
            response
        }
    })
}
export default updateUserDetails