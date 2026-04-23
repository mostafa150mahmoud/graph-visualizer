"use client"
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import {Controller, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { redirect, useRouter } from 'next/navigation'
import { loginDataType, loginSchema } from '../schema/login.Schema'
import { signIn} from "next-auth/react";

export default function page() {

 const route =  useRouter()


  const form = useForm({
    defaultValues : {
     
      email : "",
      password: "",
   

    },
   resolver: zodResolver( loginSchema)
  })

  async function handleLogin(values : loginDataType){

console.log(values)


     signIn("credentials", {...values, redirect : true, callbackUrl : "/" })
  }
  return ( <>
  
  <div className='container mx-auto max-w-5xl'>

  <h1 className='text-4xl my-10 text-center'>Login</h1>

  <div>

<form onSubmit={form.handleSubmit(handleLogin)}>




<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='email'
        aria-invalid={fieldState.invalid}
        placeholder="your email"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}


/>
<Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='password'
        aria-invalid={fieldState.invalid}
        placeholder="your password"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}


/>


<Button  className='w-full mt-5 cursor-pointer bg-white  hover:bg-blue-700 text-black px-8 py-3 rounded-lg font-semibold transition shadow-sm'>login</Button>

</form>


  </div>
  </div>
  </>
   
  )
}
