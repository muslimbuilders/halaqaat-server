import bcrypt from 'bcrypt'


const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
}

export const loadMiddleware = (schema) => {
  schema.pre("save", async function() {
    this.password = await hashPassword(this.password)
  })
}