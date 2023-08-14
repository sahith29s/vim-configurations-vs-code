import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './components/screens/LandingPage/LandingPage'

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer/>
    </>
  );
}

export default App;