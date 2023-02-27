window.addEventListener('load',()=>{

    const menuListEle=document.querySelectorAll(".menu-item");
const tableListEle=document.querySelectorAll(".table-btn");


for(let menuItem of menuListEle){
    menuItem.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("id",e.target.id);
    });
    
}


for(let table of tableListEle){
    table.addEventListener("dragover",(e)=>{
      
        e.preventDefault();
    });
    table.addEventListener("drop",(e)=>{
        
        let itemid=e.dataTransfer.getData("id");
        console.log("dropped item :"+itemid);
        console.log("table id :"+ table.id);
       update_table(itemid,table.id);
       update_local();
       update_web();
    });
}})





function update_local()
{
    localStorage.setItem("table",JSON.stringify(tables))

}



function update_table(item_id,table_id)
{

    tables[table_id].count+=1;
    tables[table_id].total_price+=iprice.get(item_id);
    //console.log(item_id);
    
    if(item_id in tables[table_id].items)
    {
        tables[table_id].items[`${item_id}`]+=1
    }
    else{
        tables[table_id].items[`${item_id}`]=1
    }
}

function update_web()
{
    for(var i=0;i<tables.length;i++)
  {
    let s1=document.getElementsByClassName('amount')[i];
    s1.textContent=tables[i].total_price;
    
    let s2=document.getElementsByClassName('items')[i];
    s2.textContent=Object.keys(tables[i].items).length;
  }
}




