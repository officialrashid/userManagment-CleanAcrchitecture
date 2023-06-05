const authServiceInterface = (repository) => {
    const bycriptPassword = (password) => repository.bycriptPassword(password)
    const ComparePassword = (password,userPassword) => repository.ComparePassword(password,userPassword)
    return {
       bycriptPassword,
       ComparePassword,
      
    }
 }
 export default authServiceInterface