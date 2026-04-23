
import * as z from "zod"

export const loginSchema = z.object({
  email : z.email("enter your email").nonempty("enter your email"),
  password :z.string().nonempty("enter your password").min(8, "name must be at lest three character "),


})


  export type loginDataType = z.infer<typeof  loginSchema >