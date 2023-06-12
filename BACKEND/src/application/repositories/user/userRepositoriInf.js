const userAuthRepositoryInt = (repositories) => {

    const userExist = (email) => repositories.userExist(email)
    const createUser = (user) => repositories.createUser(user)
    const uploadImage = (url,userId) => repositories.uploadImage(url,userId)
    const getUsers = (userId)=>repositories.getUsers(userId)
    return {
       userExist,
       createUser,
       uploadImage,
       getUsers
      
    }
 }
 export default userAuthRepositoryInt;
