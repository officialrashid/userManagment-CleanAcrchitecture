const authServiceInterface = (repository) => {
    const bycriptPassword = (password) => repository.bycriptPassword(password)
    const ComparePassword = (password,userPassword) => repository.ComparePassword(password,userPassword)
    const createAccessToken = (registeredUser)=> repository.createAccessToken(registeredUser)
    const createRefreshToken = (registeredUser) =>repository.createRefreshToken(registeredUser)
    return {
       bycriptPassword,
       ComparePassword,
       createAccessToken,
       createRefreshToken
      
    }
 }
 export default authServiceInterface