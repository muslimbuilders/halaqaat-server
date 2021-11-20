import dotenv from 'dotenv'

dotenv.config();

const variables = {
  port: process.env.PORT || 3000,
  secret: process.env.secret || "jjk.a008`892.098haxz)919",
  dbUrl: process.env.DATABASE_URL
};


export default variables;