const updateUserDetails = async (userId, name, email, phone, repositories, authService) => {
    try {
    //   const user = await repositories.userExist(email);
  
    //   if (!user) {
        const response = await repositories.updateUserDetails(userId, name, email, phone);
        console.log("edit user success", response);
        
        return {
          status: true,
          response: response
        };
    //   } else {
    //     return { message: 'Email already exists' };
    //   }
    } catch (error) {
      console.error(error);
      return { message: 'An error occurred while updating user details' };
    }
  };
  
  export default updateUserDetails;
  