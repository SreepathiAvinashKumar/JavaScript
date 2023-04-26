let searchBtn = document.getElementById('searchbtn');

let inputValue = document.getElementById('input-value');    
let btnLink = document.getElementById('link');


inputValue.addEventListener("keyup",function(e){
    if(e.code=="Enter"){
       searchBtn.click();
    }       
})



searchBtn.addEventListener('click',()=>{

    if(inputValue.value.length>0){

        btnLink.href="https://www.google.com/search?q="+inputValue.value;    
    }
    else{
        btnLink.href="";  

    }
})