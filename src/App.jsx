import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';

import './App.css'
import ImageDetails from './imageDetails';

function App() {
  

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
