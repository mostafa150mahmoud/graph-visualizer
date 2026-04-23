
import * as z from "zod"

export const signUpSchema = z.object({
  name : z.string().nonempty("enter your name").min(3, "name must be at lest three character "),
  phone : z.string().nonempty("enter your name").regex(/^01[1250][0-9]{8}$/),
  email : z.email("enter your email").nonempty("enter your email"),
  password :z.string().nonempty("enter your password").min(8, "name must be at lest three character "),
rePassword :z.string().nonempty("enter your re password").min(8, "name must be at lest three character "),

}).refine((date)=> date.password == date.rePassword, 
{
    path: ["rePassword"],
    error: "password and rePaaaword not matched"
})


  export type signUpDataType = z.infer<typeof  signUpSchema  >