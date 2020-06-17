const dotenv = require("dotenv");
dotenv.config();
const { DBPassword } = process.env;
module.exports = {
  mongoURI: `mongodb+srv://user1:${DBPassword}@cluster0.lpvu9.mongodb.net/testDB?retryWrites=true&w=majority`,
};
