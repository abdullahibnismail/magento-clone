import React from 'react'

type buttonProps={
    name:string,
    onClick:()=>void
}

export default function Button(props:buttonProps) {
  return (
    <button>
{props.name}
    </button>
  )
}
