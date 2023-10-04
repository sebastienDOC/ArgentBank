import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from './components/Router'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='body-2'>
        <Router />
      </div>
      <Footer />
    </BrowserRouter >
  )
};

export default App;
