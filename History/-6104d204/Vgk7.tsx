// import { useEffect } from "react"
// import axios from "axios";
// axios.defaults.withCredentials = true;

// const Welcome = () => {
//     const sendRequst = async () => {
//         const res = await axios.get("http://localhost:3000/api/user/user", {
//             withCredentials: true
//         }).catch(err => console.log("man"))
//         const data = await res?.data;
//         console.log(data);
//         return data;
//     }

//     useEffect(() => {
//         sendRequst().then((val) => {
//             console.log("bat");
//         })
//     }, [])

//     return (
//         <>

//         </>
//     )
// }

// export default Welcome
import React from 'react'

const Welcome = () => {
    return (
        <div>Welcome</div>
    )
}

export default Welcome