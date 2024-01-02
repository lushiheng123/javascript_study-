import React from 'react'
import { Link } from 'react-router-dom'
export const Fundamentals_list = [
  {
    name: 'alert',
    path: '/alert',
    content:"弹出警告框"
  },
  {
    name: 'string',
    path: '/string',
    content:"字符串里面用``套接变量"
  },
  {
    name: 'prompt',
    path: '/prompt',
    content:"弹出输入框"
  }
]
export default function Home() {
  return (
    <div className=' bg-white flex justify-between '>
      {/* 基础的语句 */}
      <div className=' flex w-[1440px] items-center justify-center gap-20 px-10 py-2 ' >
       <div>
          <h1 className='text-3xl'>基础中的基础</h1>
          <ul>
            {Fundamentals_list.map((item,index) => (
              <li key={item.name} className='text-2xl'>
                <Link to={item.path}>{item.name}{item.content}</Link>
              </li>
            ))}
          </ul>
          </div>
      </div>
      
      
    </div>
  )
}
