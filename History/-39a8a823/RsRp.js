const lan = async () => {
    let prom = await new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("sahith") 
        }, 2000);
    })

    console.log(prom);
    console.log("not me");

}