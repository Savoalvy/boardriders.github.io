import './styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/widgets/header';
import Footer from './components/widgets/footer';
import Main from './components/widgets/main';
import NotFound from './pages/NotFoundPage';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/main" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
