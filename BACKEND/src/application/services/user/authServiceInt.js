const authServiceInterface = (repository) => {
    const bycriptPassword = (password) => repository.bycriptPassword(password)
 
    return {
       bycriptPassword
    }
 }
 export default authServiceInterface