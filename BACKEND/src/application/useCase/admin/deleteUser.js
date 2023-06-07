
const deleteOneUser = async (userId,repositories,authService) =>{
       
    await repositories.deleteOneUser(userId).then((response)=>{

        console.log("response delte",response);
        return{
            response,
        }
    })
}
export default deleteOneUser