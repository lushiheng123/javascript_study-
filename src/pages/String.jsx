import React from 'react'
import { useEffect } from 'react'

const code_string=`let name = "John";

// embed a variable
alert(\`Hello, \${name}!\` ); // Hello, John!

// embed an expression
alert( \`the result is \${1 + 2}\` ); // the result is 3 `
export default function String() {
    useEffect(() => {
      let name = "John";
      function alert_var() {
        alert(`Hello, ${name}!`)
        alert(`the result is ${1 + 2}`)
      }
        return()=> { alert_var()}
}, [])
    return (
      <div><pre>
        {code_string}
      
      </pre></div>
  )
};
