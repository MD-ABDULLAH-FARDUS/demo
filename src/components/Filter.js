import React from 'react'
import style from '../css/filter.css'

export default function Filter(props) {
        const {name, age} = props

    return (
        <div className='white_board'>
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
        </div>
    )
}
