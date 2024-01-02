import React from 'react'
import { useEffect,useState } from 'react'


export default function Prompt() {
    const [age, setAge] = useState("")
    useEffect(() => {
        
        return () => {
            let  age = prompt('How old are you?', 100);
           setAge(age)
        }
    }
    , [])

  return (
      <div>{age}</div>
  )
}
