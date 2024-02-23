import React from 'react'
import ButtonComponent from './Button/ButtonComponent'

export default function ListItem(props) {
  return (
    <>
       <li key={props.index} style={{color: props.completed ? 'green' : 'white'}}>{props.name}</li>
       {props.children}
    </>
    
  )
}
