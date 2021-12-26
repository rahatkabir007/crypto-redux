import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import CryptoCurrencies from './components/CryptoCurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import NotFound from './components/notFound/NotFound';
import NavBar from './components/Shared/NavBar';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <div className="App">
    
        <NavBar />
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/home' element={<Home></Home>}>
          </Route>
          <Route path='/exchanges' element={<Exchanges></Exchanges>}>
          </Route>
          <Route path='/cryptocurrencies' element={<CryptoCurrencies></CryptoCurrencies>}>
          </Route>
          <Route path={`/crypto/:coinId`} element={<CryptoDetails></CryptoDetails>}>
          </Route>
          <Route path='/news' element={<News></News>}>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}>
          </Route>
        </Routes>
        <Footer/>
     
    </div>
  );
}

export default App;
