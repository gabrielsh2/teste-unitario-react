import React, { useState } from 'react'

export function Button(props) {
  const [text, setText] = useState('')
  function handleClick() {
    setText('MUDOU O TEXTO')
  }
  return <button onClick={handleClick}>{text || props.text}</button>
}
