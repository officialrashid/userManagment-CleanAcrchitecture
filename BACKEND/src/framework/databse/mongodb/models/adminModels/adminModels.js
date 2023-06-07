import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

  email: {
    type: String,

  },

  password: {
    type: String,
  },
});

const adminData = mongoose.model("admin", adminSchema); // Set the collection name to "user"

export default adminData;