
//using async-await
function getData(uId) {
    return new Promise((resovle,reject)=>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resovle("skc@gmail.com");
            }, 4000)
    });
    
    }
    
    console.log("start");
    
    async function Data(){
        var email = await getData("skc");
        console.log("Email id of the user id is: " + email);
        
    }
console.log("end");
   
    Data();
    