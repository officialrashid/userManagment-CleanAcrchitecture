import bcrypt from 'bcrypt'

const userServiceImp = () => {
    console.log("service implements keri");
 
    const bycriptPassword = async (password) => {
       console.log(password, "password is coming");
       const salt = await bcrypt.genSalt(10);
       const hashPassword = await bcrypt.hash(password, salt);
       console.log(hashPassword, "hashpassword is coming");
       return hashPassword;
    };
 
    return {
       bycriptPassword,
    };
 };
 export default userServiceImp