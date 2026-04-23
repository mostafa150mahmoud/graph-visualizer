import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req : NextRequest){


    let { productId} = await req.json()

console.log("from api",  productId)
    let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
           productId 
    },{
        headers : {
           token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5N2Y4YjJhZDZjZmU0ZDU4NDhjN2EyMSIsIm5hbWUiOiJ0YXN0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3Njk5NjYzNzksImV4cCI6MTc3Nzc0MjM3OX0.74sQu-7k2z2GDquYVln7tjnkFAt7K1JEg_5kmnD92K4" 
        }
    })
  console.log(data)


return NextResponse.json( data)
}