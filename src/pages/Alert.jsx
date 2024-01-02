import React from 'react'
import { useEffect } from 'react'
const code_string=`
export default function Alert() {
    useEffect(() => {
        return()=> alert('Hello, world!')
    }, [])`
export default function Alert() {
    useEffect(() => {
        return () => 
            alert('Hello, world!')
    }, [])
  return (
      <div className='flex justify-center items-center '>
       <pre>{code_string}</pre>
      </div>
  )
}
