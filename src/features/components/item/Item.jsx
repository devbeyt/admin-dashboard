import React from 'react'
import './item.css'

function Item({item}) {
  return (
    <div className='item'>{item.item} {item.text} {item.avatar} {item.count} {item.message}</div>
  )
}

export default Item