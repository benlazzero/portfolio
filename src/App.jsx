import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<div>home</div>} />
        <Route path='/contact' element={<div>contact</div>} />
      </Routes>
    </Router>
  )
}

export default App
