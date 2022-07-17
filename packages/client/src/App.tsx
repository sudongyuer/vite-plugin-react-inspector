import './App.css'
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{ width: '200px' }} src={logo} alt="logo" />
        <img style={{ width: '300px' }} src={'https://git.poker/sudongyuer/image-bed/blob/master/20220714/vite-plugin-auto-export-logo.1aoaypaggq5c.png?raw=true'} alt="logo" />
        <img
          style={{ width: '150px' }}
          src={''}
         />
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}>
      
        </p>
        <p>vite-plugin-hot-export</p>
        <p>
          GitHub 👉 sudongyuer 🐟
        </p>
        {/* <img src={Gold}></img> */}
      </header>
    </div>
  )
}

export default App
