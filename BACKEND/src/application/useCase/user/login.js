const loginClients = async (email, password, repositories, authService) => {
    console.log("usecase login llllll", password);
    
    return repositories.userExist(email).then(async (user) => {
      console.log(user,"oooooooooooooo9988998898989");
      if (user.email && user.password) {
        return authService.ComparePassword(password, user.password).then(async (isPassword) => {
          if (isPassword) {

            const userdata ={
                
              _id : user._id,
              name:user.name,
              email:user.email

            }
            const accessToken = await authService.createAccessToken(userdata)
         const refreshToken = await authService.createRefreshToken(userdata)
          console.log(accessToken,"accessToken in loginnnnnnnn");
          console.log(refreshToken," refreshToken in loginnnnnnnn");
            return ({ status: true,accessToken:accessToken,refreshToken:refreshToken,userInfo:userdata });
          } else {
            return { status: false };
          }
        });
      } else {
        return { message: "Invalid email or password", status: false };
      }
    });
  };
  
  export default loginClients;
  