const input = [5, 7, 9, 11, 15, 17]

let myarry = []
for (let index = input[0]; index < input.length; index++) {
    if (index % 2 != 0) {
        if (input.indexOf(index) !== -1) {
            console.log("it exists");
        }
        else {
           myarry.push(index) 
        }

    }

}




