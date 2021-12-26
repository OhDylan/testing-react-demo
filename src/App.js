import './App.css';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';
import PokeSearch from './components/PokeSearch/PokeSearch';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SubscribeForm />} />
          <Route path="/pokemon" element={<PokeSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
