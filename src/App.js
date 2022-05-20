import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppoinmentPage from './Pages/AppoinmentPage/AppoinmentPage';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/Home/Log in/LogIn';
import Reviwes from './Pages/Home/Reviwes/Reviwes';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/reviwes" element={<Reviwes/>} />
        <Route path="/appoinment" element={<AppoinmentPage></AppoinmentPage>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
