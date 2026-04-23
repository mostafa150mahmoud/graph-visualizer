import { create } from 'domain'
import React, { createContext } from 'react'

let cartContxt =  createContext()
export default function cartContext() {
  return <>
  <cartContext.Provider>

  </cartContext.Provider>
  </>
}
