"use client"
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import {Controller, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { signUpDataType, signUpSchema } from '../schema/signup.schema'
import { signupAction } from '../_actions/signup.action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function page() {

 const route =  useRouter()


  const form = useForm({
    defaultValues : {
      name : "",
      phone : "",
      email : "",
      password: "",
      rePassword : "",

    },
   resolver: zodResolver(signUpSchema)
  })

  async function handleSignUp(values : signUpDataType){

  const x =  await signupAction(values)

console.log(x)


  if(x){
    toast.success("sign up succesfuly" , {position: 'top-center'})
    route.push("/Login")
  }else{
     toast.error("sign up error")
  }

  }
  return ( <>
  
  <div className='container mx-auto max-w-5xl'>

  <h1 className='text-4xl my-10 text-center'>Sign up</h1>

  <div>

<form onSubmit={form.handleSubmit(handleSignUp)}>


<Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="your name"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}


/>

<Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your phone</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='tel'
        aria-invalid={fieldState.invalid}
        placeholder="your phone"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}


/>
<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your email</FieldLabel>
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
<Controller
  name="rePassword"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your repassword</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='Password'
        aria-invalid={fieldState.invalid}
        placeholder="your re Password"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}


/>

<Button  className='w-full mt-5 cursor-pointer bg-white  hover:bg-blue-700 text-black px-8 py-3 rounded-lg font-semibold transition shadow-sm'>sign up</Button>

</form>


  </div>
  </div>
  </>
   
  )
}
