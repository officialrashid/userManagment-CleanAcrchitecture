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
    const ComparePassword = async (password, userPassword) => bcrypt.compare(password,userPassword);
   
    return {
       bycriptPassword,
       ComparePassword,
    };
 };
 export default userServiceImp