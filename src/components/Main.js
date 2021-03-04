import React from 'react'
import Clock from './Clock'
import Title from './Title'
import './styles.css'

export default function Main(){
    return(
        <div>
            <Title title="Digital Clock"></Title>
            <Clock></Clock>
        </div>
    )
}