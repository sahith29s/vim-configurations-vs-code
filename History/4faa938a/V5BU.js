import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Homepage} />
      </Routes>
      <Button>Sahith</Button>

      This is to return
    </>
  );
}

export default App;