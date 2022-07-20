import React, { useCallback, useEffect, useState } from 'react'
import './toggle.css'
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
  function handleChange(e) {
    if (e.target.checked)
      setActive(false)

    else
      setActive(true)
  }
  return (
    <div>
      {/* <button onClick={(e) => {
        setActive(!active)
        e.preventDefault()
        e.stopPropagation()
      }}>Hi Iam toggle:{`${active}`}</button> */}
      <div className="toggleWrapper">
        <input type="checkbox" className="dn" id="dn" onChange={handleChange}/>
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
    </div>
  )
}

export default Toggle
