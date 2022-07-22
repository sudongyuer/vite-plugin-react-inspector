import { useEffect, useState } from 'react'

function App() {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (active) {
      document.addEventListener('click', (e) => {
        const filePath = e.target.getAttribute('data-react-inspector')
        const SERVER_URL = '/__react-inspector-launch-editor'
        const fetchUrl = `${SERVER_URL}?file=${filePath}`
        fetch(fetchUrl)
      })
    }
    else {
      document.removeEventListener('click', this)
    }
  }, [active])
  return (
    <div>
      <button>Hi Iam toggle</button>
    </div>
  )
}

export default App
