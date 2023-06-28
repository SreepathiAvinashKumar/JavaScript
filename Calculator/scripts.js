var b = document.getElementsByClassName("btn");


for(var i=0;i<b.length;i++){
  if(b[i].clicked==true){
    b[i].addEventListener("click",()=>{
    prompt();
    })
  }
}


let a = [];

let screen = document.getElementById("content");
let s = "";
let result = "";

b[0].addEventListener("click", () => {
  screen.innerText = 0;
  s = "";
  b[0].onactive = ()=>{b[0].style = "border-radius:30%; "};
});

b[1].addEventListener("click", () => {
  s = s + b[1].innerText;
  screen.innerText = s;
});

b[2].addEventListener("click", () => {
  s = s + b[2].innerText;
  screen.innerText = s;
});

b[3].addEventListener("click", () => {
  s = s + b[3].innerText;
  screen.innerText = s;
});

b[4].addEventListener("click", () => {
  result = eval(s);
  if (result == undefined) {
    screen.innerText = "0";
    s = "";
    result = "";
  } else {
    screen.innerText = result;
  }
  s = result;

  result = "";
});

b[5].addEventListener("click", () => {
  s = s + b[5].innerText;
  screen.innerText = s;
});

b[6].addEventListener("click", () => {
  if (s == "0" && s.length == 1) {
    screen.innerText = result;
  } else {
    s = s + b[6].innerText;
  }

  screen.innerText = s;
});

b[7].addEventListener("click", () => {
  s = s + b[7].innerText;
  screen.innerText = s;
});

b[8].addEventListener("click", () => {
  s = s + b[8].innerText;
  screen.innerText = s;
});

b[9].addEventListener("click", () => {
  s = s + b[9].innerText;
  screen.innerText = s;
});

b[10].addEventListener("click", () => {
  s = s + b[10].innerText;
  screen.innerText = s;
});

b[11].addEventListener("click", () => {
  s = s + b[11].innerText;
  screen.innerText = s;
});

b[12].addEventListener("click", () => {
  s = s + b[12].innerText;
  screen.innerText = s;
});

b[13].addEventListener("click", () => {
  s = s + b[13].innerText;
  screen.innerText = s;
});

b[14].addEventListener("click", () => {
  s = s + b[14].innerText;
  screen.innerText = s;
});

b[15].addEventListener("click", () => {
  s = s + b[15].innerText;
  screen.innerText = s;
});


