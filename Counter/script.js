let c = document.getElementById("count");
let value =  parseInt(c.textContent);
let decrement = document.getElementById('decrease').onclick= function(){ value = value -1; c.innerText=value; if(value<0){c.style.color="red"}} ;


var reset = document.getElementById('reset').onclick = function(){value = 0 ; c.innerText=value ; if(value==0){c.style.color="grey"}};
var increment = document.getElementById('increase').onclick = function(){ value = value +1; c.innerText=value;  if(value>0){c.style.color="green"}};

let darkToggle = document.querySelector("#darkToggle");
let lightImg = document.getElementById("light-img");
let darkImg = document.getElementById('dark-img');
darkToggle.addEventListener("change",()=>{document.body.classList.toggle('dark'); 
darkImg.style.visibility = "visible";
});

darkImg.addEventListener("click",()=>{document.body.classList.toggle('dark');

darkImg.style.visibility="hidden";})



