window.addEventListener("load",()=>{
  let table_btn=document.getElementsByClassName("table-btn");
let modal=document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
//modal table
for(let i=0;i<table_btn.length;i++){
    table_btn[i].addEventListener("click",(e)=>{
    modal.style.display = "block";
   
    let title=document.getElementById("m-title");
    var c=i+1;
    title.textContent="Table-"+c+" order details";
    let div=document.getElementById("modal-table")
    let table=document.createElement('table');
    div.appendChild(table);
    let tr=document.createElement('tr');
        table.appendChild(tr);
        let t1=document.createElement('th');
        let t2=document.createElement('th');
        let t3=document.createElement('th');
        let t4=document.createElement('th');
        t1.textContent="S.No"
        t2.textContent="Items";
        t3.textContent="Price";
        t4.textContent="Servings"
        tr.appendChild(t1);
        tr.appendChild(t2);
        tr.appendChild(t3);
        tr.appendChild(t4);
    var p=1;
    for(const key in tables[i].items){
        let tr=document.createElement('tr');
        tr.setAttribute('id',key+"m");
        table.appendChild(tr);
        let t1=document.createElement('td');
        let t2=document.createElement('td');
        let t3=document.createElement('td');
        let item_c=document.createElement('input');
        let t4=document.createElement('td');
        let t5=document.createElement('td');
        let del=document.createElement("button");
        //console.log(key);

        t1.textContent=p; p++;
        t2.textContent=key;
        t3.textContent=iprice.get(key);
        item_c.setAttribute('type','number');
        item_c.setAttribute('step',1);
        item_c.value=tables[i].items[key];
        del.setAttribute("id","delete");
        del.textContent='delete';
        tr.appendChild(t1);
        tr.appendChild(t2);
        tr.appendChild(t3);
        tr.appendChild(t4);
        tr.appendChild(t5);
        t4.appendChild(item_c);

        t5.appendChild(del);
       
      //servings input update
      item_c.addEventListener('input', function() {
          var temp=(item_c.value)-(tables[i].items[key]);
          tables[i].items[key]=Number(item_c.value);
            
            tables[i].count+=temp; 
        tables[i].total_price+=temp*iprice.get(key);
          
        update_local();
        update_web(); 
        modal_update(i)
          });
      //delete button
      del.addEventListener('click',(e)=>{
        let temp=tables[i].items[key];
        tables[i].count-=temp;
        tables[i].total_price-=temp*iprice.get(key);
        delete tables[i].items[key];
        document.getElementById(key+"m").style.display="none";
        
        modal_update(i);
        update_local();
        update_web(); 
    
      })

         
                   
    }
    //tootal price
    let div1=document.createElement('div');
    div.appendChild(div1);
    let par=document.createElement('span');
    par.setAttribute("id","total_price")
    par.textContent="Total Price: "+tables[i].total_price;
    div1.appendChild(par);
//generate bill
    let div2=document.createElement('div');
    div.appendChild(div2);
    let btn=document.createElement('button');
    btn.setAttribute('id','bill-btn');
    btn.textContent="Generate Bill";
    div2.appendChild(btn);

   //generate bill function
    let bill_btn=document.getElementById("bill-btn");
    bill_btn.addEventListener("click",(e)=>{
      let q=i+1;
      document.getElementById('m-title').textContent="Table-"+q+" Bill details";
      document.getElementById('modal-table').innerHTML="";
      let table=document.getElementById("modal-table")
      let tr=document.createElement('tr');
      let t1=document.createElement('th');
      let t2=document.createElement('th');
      t1.textContent="Total Items";
      t2.textContent="Total Bill";
      table.appendChild(tr);
      tr.appendChild(t1);
      tr.appendChild(t2);
      let tr1=document.createElement('tr');
      let t11=document.createElement('th');
      let t22=document.createElement('th');
      t11.textContent=tables[i].count;
      t22.textContent=tables[i].total_price;
      table.appendChild(tr1);
      tr1.appendChild(t11);
      tr1.appendChild(t22);
      tables[i].count=0;
      tables[i].total_price=0;
      tables[i].items={};
      update_local();
      update_web();

    })
    });
    } 
    //close
    span.onclick = function() {
      modal.style.display = "none";
     document.getElementById("modal-table").innerHTML="";
    }
    
})
    


  
//update modal content
  function modal_update(i){
    let f=1;
    for(const key in tables[i].items){
     let sno= document.getElementById(key+"m").getElementsByTagName("td")[0];
     
     sno.textContent=f;
     f++;

    }
    document.getElementById("total_price").textContent="Total Price: "+tables[i].total_price;
  }
  