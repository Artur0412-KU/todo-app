import React from 'react'

export default function ButtonComponent(props) {
  return (
    <button type = {props.type} onClick={props.onClick} className={props.className}>{props.text}</button>
  )
}
