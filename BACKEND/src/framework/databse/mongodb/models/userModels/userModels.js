import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,

  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
},
});

const UserData = mongoose.model("User", userSchema); // Set the collection name to "user"

export default UserData;
