import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import Router from './components/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Footer />
    </BrowserRouter >
  )
};

export default App;
