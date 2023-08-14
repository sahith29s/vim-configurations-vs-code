import {  Routes , Route } from "react-router-dom";

//import conmponents 
import Main from "./components/Main";
import Quiz from "../clone/Quiz_App_Client/src/components/Quiz";


function App() {
  return (
    <>
    
    
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/quiz" element={<Quiz/>} />
    </Routes>

    </>
  );
}

export default App;