import React from 'react'
import { MdSmsFailed } from 'react-icons/md'
import "./Warning.css"

export default function Warning(props) {
  console.log(props)
  return (
    <>
      <MdSmsFailed id="warning"></MdSmsFailed>
          <span id="span-text">{props.name} is required</span>
    </>
  )
}
