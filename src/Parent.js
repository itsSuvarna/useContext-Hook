import React, { createContext } from "react"
import ChildA from "./ChildA"


const FirstName =createContext()
const LastName = createContext()


function Parent(){
  
  return(
     <>
         <FirstName.Provider value={"suvarna"}>
           <LastName.Provider value={"somvanshi"}>
              <ChildA/>
            </LastName.Provider>
          </FirstName.Provider>
    </>
  )
}

export default Parent
//to export multiple ele use object as below
export {FirstName,LastName}

