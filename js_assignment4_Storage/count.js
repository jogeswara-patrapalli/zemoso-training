

function init(){
  document.getElementById("local").innerHTML = localStorage.getItem("count");

  document.getElementById("session").innerHTML = sessionStorage.getItem("count");
}




function Count() {  
  
      if (localStorage.length==0) {  
        localStorage.setItem("count",1); 

      } else {  
       var l= localStorage.getItem("count");
       localStorage.removeItem("count");
       l++;
       localStorage.setItem("count",l);
      }  


      if (sessionStorage.length==0) {  
        sessionStorage.setItem("count",1); 

      } else {  
       var s= sessionStorage.getItem("count");
       sessionStorage.removeItem("count");
       s++;
       sessionStorage.setItem("count",s);
      } 

      document.getElementById("local").innerHTML = localStorage.getItem("count");
   
      document.getElementById("session").innerHTML = sessionStorage.getItem("count");

    
  }  
    
  
  function Clear() {  
      localStorage.clear();  
      sessionStorage.clear();
      document.getElementById("local").innerHTML ="";

document.getElementById("session").innerHTML ="";

  }  