import userdata from "../../../entities/user.js";

const adminAddUsers = async (name, email, phone, password, repositories, authService) => {
  try {
    const user = await repositories.userExist(email);

    if (!user) {
      const bycriptPassword = await authService.bycriptPassword(password);
      const userDetails = userdata(name, email, phone, bycriptPassword);
      const adminCreateUser = await repositories.adminCreateUser(userDetails);

      const registeredUser = {
        _id: adminCreateUser?._id,
        name: adminCreateUser?.name,
        email: adminCreateUser?.email,
      };

      const accessToken = await authService.createAccessToken(registeredUser);
      const refreshToken = await authService.createRefreshToken(registeredUser);

      return {
        status: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
        userInfo: registeredUser,
        adminCreateUser: adminCreateUser,
      };
    } else {
      return { message: 'Email already exists' };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while adding the user' };
  }
};

export default adminAddUsers;
