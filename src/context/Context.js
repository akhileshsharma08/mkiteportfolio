
import React, { createContext, useContext, useEffect, useState } from 'react'

 const MyContext = createContext()

//  main context start 
const Context = ({ children }) => {
  const [empData,setEmpData]= useState([])
  const [loading,setLoading]= useState(true)
  const [myname,setMyName]= useState('')
  const [sortedData,setSortedData]= useState([])

  useEffect(()=>{
 
  //  const fetchdata= async()=>{
       fetch('https://6458a1858badff578ef64314.mockapi.io/mkite')
          .then(res => res.json())
          .then(data => {
            const myempData =  data
           setEmpData(myempData)
            setLoading(false)
          })
    // }
 
 
   
// fetchdata()
  },[])
  
// console.log(empData,"empData context")

  return (
    <MyContext.Provider value={{ empData,setEmpData,loading,setLoading,myname,setMyName,sortedData,setSortedData }}>
      {children}
    </MyContext.Provider>
  )
}

export default Context;

export function ContextData(){
  return useContext(MyContext)
}
