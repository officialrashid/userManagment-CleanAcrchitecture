const getAllUsers = async (repositories, authService) => {
    return repositories.getAllUserList().then((response) => {
      console.log(response, "user datas fetch");
      return{
        response,
      } 
    });
  };
  export default getAllUsers