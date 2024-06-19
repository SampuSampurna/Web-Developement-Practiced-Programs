import React from 'react'
import { category } from '../utills/category'

export const Store = () => {
  return (
    <div className='store-container'>
        <div className='category-side-bar'>
            {
                category.map((item, index)=>(
                    <div key={index} className='category-items'>{ item }</div>
                ))
            }
        </div>
        <div className='display-container'>list section</div>
    </div>
  )
}
