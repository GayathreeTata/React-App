import React, { useState } from 'react'

export default function FBC(props) {
    let [state,changestate] = useState()
  return (
    <div>
      <p>I am a FBC {props.topic}</p>
    </div>
  )
}
