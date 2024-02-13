import React from 'react'
import './GamesCard.css'

export default function GamesCard(props) {
    return (
        // <div className='Sports-row-item'>
        //     <h1>{props.heading}</h1>
        //     <ul>
        //         <li><a>{props.list}</a></li>
        //     </ul>
        // </div>
        <div className='Sports-row-item'>
            <h1>{props.heading}</h1>
            <ul>
                <li><a>{props.list}</a></li>
            </ul>
        </div>
    )
}
