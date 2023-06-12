const uploadImage = async (url, userId, repositories, authService) => {
    console.log(url, userId, "coming in usecase url");
    try {
      const response = await repositories.uploadImage(url, userId);
      console.log(response, "response in usecase ethitaaa");
      return {
        response: response,
      };
    } catch (error) {
      console.log(error);
      throw error; // re-throw the error to be caught in the controller
    }
  };
  export default uploadImage