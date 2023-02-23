
window.addEventListener('load',()=>{
    const tableSearchEle=document.querySelector(".table-search");
const menuSearchEle=document.querySelector(".item-search");




tableSearchEle.addEventListener('keyup',function(){
    let input=tableSearchEle.value;
    input=input.toLowerCase(input);
    //console.log(input);
    let allTableItems=document.querySelectorAll(".table-btn");
    for(let item of allTableItems){
       let itemData=item.textContent;
       itemData=itemData.toLowerCase();
       if((itemData.includes(input))){    
          // console.log(itemData);
           item.style.display="initial";        
       }
       else{
           item.style.display="none";
       }

    }
})

menuSearchEle.addEventListener('keyup',function(){
   let input=menuSearchEle.value;
   input=input.toLowerCase(input);
   let allMenuItems=document.querySelectorAll(".menu-item");
   for(let item of allMenuItems){
       //console.log(item);
      let itemData=item.textContent;
      itemData=itemData.toLowerCase();
      if((itemData.includes(input))){    
          //console.log(itemData);  
          item.style.display="initial";        
          
      }
      else{
          item.style.display="none";
      }

   }
})
})



