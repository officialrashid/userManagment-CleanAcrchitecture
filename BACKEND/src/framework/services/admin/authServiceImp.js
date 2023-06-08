import bcrypt from "bcrypt";
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

  return {
    adminBycriptPassword,
    compareAdminPassword,
    bycriptPassword,
  };
};

export default adminServiceImp;
