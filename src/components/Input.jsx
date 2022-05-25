import React from 'react'

function Input() {
  const example: OP = {
    title: "3204",
    description: 'kdjfhg'
  }
  return (
    <div>Input</div>
  )
}
interface OP {
  title: string,
  description: string
}
export default Input