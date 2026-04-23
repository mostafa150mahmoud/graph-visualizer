"use server"

import axios from "axios";
import { signUpDataType } from "../schema/signup.schema";
import { cookies } from "next/headers";

export async function signupAction(userData: signUpDataType) {
  try {
    const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", userData);

   
    
    if (data.message === "success") {

       const cookiy = await cookies()
       cookiy.set("tooken-user", data.token,{
        httpOnly : true,
        maxAge : 60 * 60 * 24,
        sameSite : "strict"
       })



      return { success: true };
    }
  } catch (error: any) {
    // هنا بنمسك الـ 409 أو أي خطأ تاني من الـ API
    const errorMessage = error.response?.data?.message || "Something went wrong";
    console.log("Error from API:", errorMessage);
    
    return { success: false, error: errorMessage };
  }
}