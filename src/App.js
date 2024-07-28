import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/AboutPage';
import Bookgenre from './Pages/BookGenre';
import DetailsPage from './Pages/DetailsPage';
import CartSection from './Pages/CartSection';
import AddNew from './Pages/AddNew';

function App() {
  return (

    <div className="App">
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/addnew" element={<AddNew/>} />
        <Route path="/books/:genre" element={<Bookgenre/>} />
        <Route path="/detail/:id" element={<DetailsPage/>} />
        <Route path="/cart" element={<CartSection/>} />
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
