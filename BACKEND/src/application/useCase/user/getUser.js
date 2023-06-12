const getUsers = async(userId,repositories,authService)=>{
       
  const response=  await repositories.getUsers(userId)
        console.log(response,"get user in usecaseeeeeeeeee");
        try{
            return {
                response: response,
              };
            } catch (error) {
              console.log(error);
              throw error; // re-throw the error to be caught in the controller
            }
        }
      
export default getUsers