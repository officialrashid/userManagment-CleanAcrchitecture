import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import config from '../../../config/config.js'
const adminServiceImp = () => {
  console.log("admin servicce keriiiii");

  const adminBycriptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  };
  const compareAdminPassword = (password, adminPassword) =>
    bcrypt.compare(password, adminPassword);

  const bycriptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  };
  const createAccessToken = async (admindata) => {
    const accessToken = jwt.sign(admindata, config.jwtAccessSecretKey, { expiresIn: '1d' })
    console.log(accessToken,"access token vanuu makkele adminintee");
    return accessToken
}
const createRefreshToken = async (admindata) =>{
  const refreshToken = jwt.sign(admindata, config.jwtRefreshSecretKey, { expiresIn: '7d' })
  console.log(refreshToken,"refresh token vanuu makkalee adminintee");
  return refreshToken
}
  return {
    adminBycriptPassword,
    compareAdminPassword,
    bycriptPassword,
    createAccessToken,
    createRefreshToken
  };
};

export default adminServiceImp;
