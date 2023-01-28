import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';
import { container } from './App.module.css'

function App() {
  return (
    <div className={container}>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Showcase />} />
          <Route path='/contact' element={<div>contact</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
