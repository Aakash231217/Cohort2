async function main(){
    fetch("https://sum-server.100xdevs.com/todos",{
        method:"POST",
        body:{
            username:"aakash",
            password:"Aakash@28"
        },
        headers:{
            "Authorization":"Bearer 123",
        }
    })
    .then(async response=>{
        const json = await response.json()
    })
}

main();


const axios = require("axios");
async function main2(){
    const response = await axios.post("https://sum-server.100xdevs.com/todos",{
        username:"aakash",
    },{
        headers:{
            Authorization:"Bearer 123"
        }
    });

    console.log(response.data.todos.length);
}
main2();