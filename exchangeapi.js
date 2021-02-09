const select=document.querySelectorAll("select");
const input=document.querySelectorAll("input");
const api_url="https://api.exchangeratesapi.io/latest";

let html="";

async function currency(){
    const res=await fetch(api_url);
    const data=await res.json();
   // console.log(data);
    const arrKeys=Object.keys(data.rates);
   // console.log(data.rates);
  //  console.log(arrKeys);
  const rates=data.rates;
    arrKeys.map(item=>{
        return html+=`<option value=${item}>${item}</option>`;
    });
    //console.log(html);


    
   // console.log(rates);
    for(let i=0;i<select.length;i++){
        select[i].innerHTML= html;
    };
     

    //console.log(rates[select[1].value])
    input[0].addEventListener('keyup',()=>{
        input[1].value=input[0].value * rates[select[1].value] / rates[select[0].value];
    });
    input[1].addEventListener('keyup',()=>{
        input[0].value=input[1].value * rates[select[0].value] / rates[select[1].value];
    });
   
    select[0].addEventListener('change',()=>{
        input[0].value=input[0].value * rates[select[1].value] / rates[select[0].value];
    });
   
    select[1].addEventListener('change',()=>{
        input[1].value=input[0].value * rates[select[0].value] / rates[select[1].value];
    });
   
    

};

currency();