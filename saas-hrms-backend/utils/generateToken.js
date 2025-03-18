import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token 7 days ke liye valid rahega
  });
};

export default generateToken;
