import { useCallback } from "react"

const De = () => {

    const debounce = (func : any, time : any) =>{
        let timer;
        return () =>{
            clearTimeout()
            timer = setTimeout(() => {
                func()
            }, time);
        }
    }
    const debouncesearch = debounce(() => { console.log("sahith") }, 300)
    const handleChange = () => {
        debouncesearch()
    };

    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default De