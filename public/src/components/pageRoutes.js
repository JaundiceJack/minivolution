// Import router stuff
import { Route, Routes } from 'react-router-dom';
// Import Page Components
import Home from './pages/home/_home.js';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default PageRoutes;
