import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

export default function loading() {
  return <>
  
  <div className='h-screen bg-amber-50 flex justify-center items-center'>
<FidgetSpinner 
visible={true}
height="80"
width="88"
ariaLabel="fidget-spinner-loading"
wrapperStyle={{}}
wrapperClass="fidget-spinner-warpper"
/>

  </div>
  </>
}
