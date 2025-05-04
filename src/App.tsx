
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Coaches from './pages/Coaches';
import Courts from './pages/Courts';
import HowToPlay from './pages/HowToPlay';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from './components/ui/toaster';

import './App.css';

function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/courts" element={<Courts />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </LanguageProvider>
    </>
  );
}

export default App;
