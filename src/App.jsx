import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import ExchangeRate from './components/ExchangeRate';

export default function App() {
  return (
    <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<h1 style={{marginLeft:"500px"}}>Please choose a currency to exchange</h1>} />
          <Route path="/currency/:currencyCode" element={<ExchangeRate />} />
        </Routes>
    </BrowserRouter>
  );
}