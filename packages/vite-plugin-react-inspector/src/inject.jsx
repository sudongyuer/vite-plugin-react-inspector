import React from 'react'
import ReactDOM from 'react-dom/client'
import Toggle from './Toggle/Toggle'
const divEle = document.createElement('div')
divEle.id = 'react-inspector-container'
divEle.style.position = 'fixed'
divEle.style.top = '30px'
divEle.style.right = '100px'
divEle.style.backgroundColor = '#ccc'
divEle.style.zIndex = '9999'
document.body.appendChild(divEle)

const domContainer = document.querySelector('#react-inspector-container')
ReactDOM.createRoot(domContainer).render(
  <Toggle />,
)
