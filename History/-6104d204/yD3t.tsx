import { useEffect } from "react"
import axios from "axios";
axios.defaults.withCredentials = true;

const Welcome = () => {
    const sendRequst = async () => {
        const { data } = await axios.get("http://localhost:3000/api/user/user", { withCredentials: true });
        console.log(data);
    }
    useEffect(() => {
        sendRequst().then((val) =>{
            console.log(val);
        })
    }, [])

    return (
        <>

        </>
    )
}

export default Welcome