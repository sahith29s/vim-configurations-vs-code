import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={
          <>
            <Header />
            <Home />
          </>
        } />

        
      </Routes>

    </>
  );
}

export default App;