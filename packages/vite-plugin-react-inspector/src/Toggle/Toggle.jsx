import React, { useCallback, useEffect, useState } from 'react'
import './toggle.css'
function Toggle() {
  const [active, setActive] = useState(false)
  const [postion, setPotion] = useState({ x: 0, y: 0 })
  const [fileDetail, setFileDetail] = useState({ filePath: '', line: 0, column: 0 })
  const { x, y } = postion
  const eventCallBack = useCallback((e) => {
    const filePath = e.target.getAttribute('data-react-inspector')
    const SERVER_URL = '/__react-inspector-launch-editor'
    const fetchUrl = `${SERVER_URL}?file=${filePath}`
    fetch(fetchUrl)
  }, [])
  const mousemoveCallback = useCallback((e) => {
    e.preventDefault()
    const file = e.target.getAttribute('data-react-inspector')
    if (file) {
      const [filePath, line, column] = file.split(':')
      setFileDetail({ filePath, line, column })
      setPotion({ x: e.clientX, y: e.clientY })
    }
  }, [])
  useEffect(() => {
    if (active) {
      document.addEventListener('click', eventCallBack)
      document.addEventListener('mousemove', mousemoveCallback)
    }

    else {
      document.removeEventListener('click', eventCallBack)
      document.removeEventListener('mousemove', mousemoveCallback)
    }
  }, [active])

  useEffect(() => {
    const dragElement = document.getElementById('drag-element')
    dragElement.addEventListener('dragend', (e) => {
      e.preventDefault()
      dragElement.style.top = `${e.clientY}px`
      dragElement.style.left = `${e.clientX}px`
    })
  }, [])
  function handleChange(e) {
    if (e.target.checked)
      setActive(false)

    else
      setActive(true)
  }
  return (
    <div>
      <div className="toggleWrapper" draggable="true" id="drag-element">
        <div className="handle">
          Drag here
        </div>
        <input type="checkbox" defaultChecked="false" className="dn" id="dn" onChange={handleChange}/>
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
      <div className="file-detail" style={{
        visibility: `${active ? 'visible' : 'hidden'}`,
        top: `${y}px`,
        left: `${x}px`,
        pointerEvents: 'none',
      }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            x,
            y,
          }}
        >
          <p>filePath:{fileDetail.filePath}</p>
          <p>line:{fileDetail.line}</p>
          <p>column:{fileDetail.column}</p>
        </div>
      </div>
    </div>
  )
}

export default Toggle
