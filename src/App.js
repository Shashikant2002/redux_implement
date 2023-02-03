import './App.css';
import Header from "./components/Header.js"
import Heading from './components/Heading';
import ProductListing from './components/ProductListing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<><Heading heading="Redux Implement" /><ProductListing /> </>} />
          <Route exact path='/product/:proid' element={<><Heading heading="Redux Implement" /><ProductDetail /> </>} />
          
          <Route exact path='*' element={<Heading heading="404 Not Found" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
