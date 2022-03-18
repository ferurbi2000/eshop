import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, requiered: true },
    email: { type: String, requiered: true, unique: true },
    password: { type: String, requiered: true },
    isAdmin: { type: Boolean, default: false, requiered: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
