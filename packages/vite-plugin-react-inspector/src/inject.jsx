import React from 'react'
import reactDOM from 'react-dom'
import Toggle from './Toggle/Toggle'

const divEle = document.createElement('div')
divEle.id = 'react-inspector-container'
divEle.style.position = 'fixed'
divEle.style.top = '40px'
divEle.style.right = '100px'
divEle.style.backgroundColor = '#ccc'
divEle.style.zIndex = '9999'
document.body.appendChild(divEle)

const domContainer = document.querySelector('#react-inspector-container')

// react 18.x use reactDOM.render has console.error
const error = console.error
console.error = () => { }
// react version compatible
reactDOM.render(<Toggle />, domContainer)
console.error = error
