import React, { useContext } from "react"
import {FirstName,LastName} from "./Parent"


function ChildA(){

  const fname = useContext(FirstName)
  const lname = useContext(LastName)
  
  
  return(
    <>
       my Name is {fname}{lname}
    </>
  )
}
export default ChildA
