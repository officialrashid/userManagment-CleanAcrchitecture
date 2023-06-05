const loginClients = async (email, password, repositories, authService) => {
    console.log("usecase login llllll", password);
    
    return repositories.userExist(email).then(async (user) => {
      if (user.email && user.password) {
        return authService.ComparePassword(password, user.password).then((isPassword) => {
          if (isPassword) {
            return { status: true };
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
  