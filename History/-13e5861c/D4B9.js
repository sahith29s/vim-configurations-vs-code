// import React from 'react'
// const man = async ()=>{

// const App = () => {
//   return (
//    <>

//     <div id="goodmorning">

//     </div>
//    </>
//   )

// export default App

import React from "react";

const App = () => {
  let view = "sahith";
  let RealTime = new Date().getHours();
  if (RealTime >= 0 && RealTime < 12) {
    view = "It's morning Dude Chill marr";
  } else if (RealTime >= 12 && RealTime < 19) {
    view = "It's Evening now abhi be cill marr";
  } else if (RealTime >=19 && RealTime < 24) {
    view = "It's night now abhi be cill marr";
  }
  return (
    <>
      <div> its's , {view}</div>
    </>
  );
};

export default App;
