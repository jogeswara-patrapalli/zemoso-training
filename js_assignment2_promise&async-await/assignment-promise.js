// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");




//using Promise
function getData(uId) {
    return new Promise((resovle,reject)=>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resovle( "skc@gmail.com");
            }, 4000)
    });
    
    }
    
    console.log("start");
getData('skc').then((email)=>{console.log("Email id of the user id is: " + email);
});
console.log("end");
