import React from 'react'

export default function Button(props) {
  return (
    <>
      <button className='border-solid border-2 border-indigo-600 w-[10rem] h-10 rounded-md text-md font-bold bg-indigo-600 text-white hover:bg-white hover:text-black' onClick={props.action}>{props.tiatle}</button>
    </>
  )
}
