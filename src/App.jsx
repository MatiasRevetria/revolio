import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Revolio from './Revolio';
import './App.css';
import PreferencesProvider from './context/PreferencesProvider';

function App() {
  return (
    <PreferencesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Revolio />} />
        </Routes>
      </BrowserRouter>
    </PreferencesProvider>
  );
}

export default App;
