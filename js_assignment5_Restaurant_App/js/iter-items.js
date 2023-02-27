let iprice=new Map();
iprice.set("ChickenBiryani",220);
iprice.set('FrenchFries',105);
iprice.set('ChickenPizza',180);
iprice.set("MuttonDumBiryani",280);
iprice.set("ChickenMandi",800);
iprice.set("VegBiryani",180);
iprice.set("ChickenLollipops",280);
iprice.set("MixedBiryani",280);
iprice.set("Chicken65",220);
iprice.set("IceCream",60);
iprice.set("BananaSplit",60);
iprice.set("ChocolateCake",60);
iprice.set("GulabJamun",40);
iprice.set("Payasam",80);
iprice.set("Tequila",180);
iprice.set("BananaMilkShake",70);
iprice.set("HotChocolate",80);
iprice.set("Water",20);
iprice.set("Coke",30);
iprice.set("MozarellaStick",220);
iprice.set("SpicyLobster",240);
iprice.set("GreenPapayaSalad",160);
iprice.set("MeatBalls",180);



let itype=new Map();
itype.set("ChickenBiryani",'main');
itype.set('ChickenPizza','main');
itype.set("MuttonDumBiryani",'main');
itype.set("ChickenMandi",'main');
itype.set("VegBiryani",'main');
itype.set("MixedBiryani",'main');

itype.set("ChickenLollipops",'entree');
itype.set('FrenchFries','entree');
itype.set("Chicken65",'entree');

itype.set("MozarellaStick",'appetizers');
itype.set("SpicyLobster",'appetizers');
itype.set("GreenPapayaSalad",'appetizers');
itype.set("MeatBalls",'appetizers');

itype.set("HotChocolate",'beverages');
itype.set("Water",'beverages');
itype.set("Coke",'beverages');
itype.set("Tequila",'beverages');
itype.set("BananaMilkShake",'beverages');

itype.set("ChocolateCake",'Desserts');
itype.set("GulabJamun",'Desserts');
itype.set("Payasam",'Desserts');
itype.set("BananaSplit",'Desserts');
itype.set("IceCream",'Desserts');




let tables=[
    {
       
        items:{},
        count:0,
        total_price:0
       
    },{
     
        items:{},
        count:0,
        total_price:0
       
    },{
      
        items:{},
        count:0,
        total_price:0
       
    },{
      
        items:{},
        count:0,
        total_price:0
       
    }
]

if(localStorage.length==0)
{
    localStorage.setItem("table",JSON.stringify(tables))

}
tables=JSON.parse(localStorage.getItem("table"))




var main=document.getElementById('menu-root');
iprice.forEach (function(value, key) {
    let divm=document.createElement('div');
    divm.setAttribute('class', 'menu-item');
    divm.setAttribute('draggable', "true");
    divm.setAttribute('id', key);
    main.appendChild(divm);
    //item name
    let divc1=document.createElement('div');
    divc1.setAttribute('class', 'item-name');
    divc1.setAttribute('id', key);
    divc1.textContent=key;
    divm.appendChild(divc1);
    //type
    let divc2=document.createElement('div');
    divc2.setAttribute('class', 'courseType');
    divc2.textContent=itype.get(key);
    divm.appendChild(divc2);
    //price
    let span=document.createElement('span');
   // divc2.setAttribute('class', 'coursetype');
    span.textContent=value;
    divm.appendChild(span);
  });


  var main_t=document.getElementById('table-root');
  for(var i=0;i<tables.length;i++)
  {//btn
    let btn=document.createElement('button');
    btn.setAttribute('class', 'table-btn');
    btn.setAttribute('id', i);
    main_t.appendChild(btn);
    // div
    let div_t=document.createElement('div');
    div_t.setAttribute('class', 'table-content');
    btn.appendChild(div_t);
    //table name
    let h_3=document.createElement('h3');
    var c=i+1;
    
    h_3.textContent='Table-'+c;
    div_t.appendChild(h_3);
    //lable n span
    let l=document.createElement('label');
    l.setAttribute('for', "total");
    l.textContent="Total:";
    div_t.appendChild(l);

    let s1=document.createElement('span');
    s1.setAttribute('class', "amount");
    s1.textContent=tables[i].total_price;
    div_t.appendChild(s1);

    let l1=document.createElement('label');
    l1.setAttribute('for', "items");
    l1.textContent=" Items:";
    div_t.appendChild(l1);
   
    let s2=document.createElement('span');
    s2.setAttribute('class', "items");
    s2.textContent=tables[i].count;
    div_t.appendChild(s2);
  }



 



