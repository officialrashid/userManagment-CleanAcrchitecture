import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../../config/config.js'
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
    const createAccessToken = async (user) => {
      const accessToken = jwt.sign(user, config.jwtAccessSecretKey, { expiresIn: '1d' })
      console.log(accessToken,"access token vanuu makkele");
      return accessToken
}
const createRefreshToken = async(user)=>{
   const refreshToken = jwt.sign(user, config.jwtRefreshSecretKey, { expiresIn: '7d' })
   console.log(refreshToken,"refresh token vanuu makkalee");
   return refreshToken
}
    return {
       bycriptPassword,
       ComparePassword,
       createAccessToken,
       createRefreshToken
    };
 };
 export default userServiceImp