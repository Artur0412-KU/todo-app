import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function ListItem(props) {
  return (
    <>
       <li key={props.index} style={{color: props.completed ? 'green' : '#38598b'}}>{props.name}</li>
       {props.children}
    </>
    
  )
}