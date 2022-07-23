import './App.css'
import Hello from './Hello'
import ReactInspector from './ReactInspector'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactInspector/>
        <img
          style={{ width: '150px' }}
          src={''}
         />
        <p>vite-plugin-react-inspector</p>
        <p>
          GitHub 👉 sudongyuer 🐟
        </p>
        <Hello/>
      </header>
    </div>
  )
}

export default App
