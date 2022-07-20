import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
function Toggle() {
  const [active, setActive] = useState(false)
  const eventCallBack = useCallback((e) => {
    const filePath = e.target.getAttribute('data-react-inspector')
    const SERVER_URL = '/__react-inspector-launch-editor'
    const fetchUrl = `${SERVER_URL}?file=${filePath}`
    fetch(fetchUrl)
  }, [])
  useEffect(() => {
    if (active)
      document.addEventListener('click', eventCallBack)

    else
      document.removeEventListener('click', eventCallBack)
  }, [active])
  return (
    <div>
      <button onClick={(e) => {
        setActive(!active)
        e.preventDefault()
        e.stopPropagation()
      }}>Hi Iam toggle:{`${active}`}</button>
    </div>
  )
}
const divEle = document.createElement('div')
divEle.id = 'react-inspector-container'
divEle.style.position = 'fixed'
divEle.style.top = '0'
divEle.style.left = '0'
divEle.style.backgroundColor = '#fff'
divEle.style.zIndex = '9999'
document.body.appendChild(divEle)

const domContainer = document.querySelector('#react-inspector-container')
ReactDOM.createRoot(domContainer).render(
  <Toggle />,
)
