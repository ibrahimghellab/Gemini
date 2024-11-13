


const key="AIzaSyAXv1l3XcVal68_fA7eeX7Jnlbrpf4pQPc";
let URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

const res=document.getElementById("response");
const input=document.getElementById("userInput");
const send=document.getElementById("send");
const deleteAll=document.getElementById("delete");
const mode=document.getElementById("mode");
const inputAndSend=document.getElementById("inputAndSend");

let plan=document.getElementById("plan");
let tips=document.getElementById("tips");
let news=document.getElementById("news");
let code=document.getElementById("code");




let nbMode=0;


const darkMode=()=>{
  if(document.getElementById("planImage")){
    document.getElementById("planImage").src="images/writeBlack.png";
  document.getElementById("tipsImage").src="images/bulbBlack.png";
  document.getElementById("newsImage").src="images/compassBlack.png";
  document.getElementById("codeImage").src="images/codeBlack.png";
  tips.style.backgroundColor="#cdd2d8";
  plan.style.backgroundColor="#cdd2d8";
  news.style.backgroundColor="#cdd2d8";
  code.style.backgroundColor="#cdd2d8";
  }
  document.getElementById("planImage")
  document.body.style.backgroundColor="white";
  inputAndSend.style.backgroundColor="#cdd2d8";
  mode.style.backgroundColor="#cdd2d8"
  mode.style.backgroundColor="#cdd2d8"
  deleteAll.style.backgroundColor="#cdd2d8";
  document.body.style.color="black";
  send.style.backgroundImage=`url("images/sendBlack.png")`
  mode.style.backgroundImage=`url("images/darkmode.png")`;
  deleteAll.style.backgroundImage=`url("images/deleteBlack.png")`;
  nbMode++;
}
const lightMode=()=>{
  if(document.getElementById("planImage")){
    document.getElementById("planImage").src="images/writeWhite.png";
    document.getElementById("tipsImage").src="images/bulbWhite.png";
    document.getElementById("newsImage").src="images/compassWhite.png";
    document.getElementById("codeImage").src="images/codeWhite.png";
    tips.style.backgroundColor="#323232";
    plan.style.backgroundColor="#323232";
    news.style.backgroundColor="#323232";
    code.style.backgroundColor="#323232";
  }

  document.body.style.backgroundColor="#242424";
  document.body.style.color="white";
  inputAndSend.style.backgroundColor="#323232";
  mode.style.backgroundColor="#323232"
  deleteAll.style.backgroundColor="#323232";
  send.style.backgroundImage=`url("images/sendWhite.png")`
  mode.style.backgroundImage=`url("images/lightmode.png")`;
  deleteAll.style.backgroundImage=`url("images/deleteWhite.png")`;
  nbMode++;
}

const fundeleteAll=()=>{
  let userChoice=confirm("Voulez-vous supprimer toute la conversation ?");
  if(userChoice){
    res.textContent="";
    input.value="";
  }
}

const deleteTitles=()=>{
  document.getElementById("header").remove();
}

const generateAPIResponse=async(messageUser)=>{
  
  res.innerHTML+=messageUser+ '\n';

  const response= await fetch(URL,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      contents: [{
        role:"user",
        parts:[{text: messageUser}]
      }]
      
    })
  });
  const data=await response.json();
  res.innerHTML += `<pre>` + marked.parse(data.candidates[0].content.parts[0].text) + `</pre>`;
  input.value="";
}



  input.addEventListener("keydown",function(event) {
    if(event.code=='Enter'){
        generateAPIResponse(input.value);
    }
    
  })
  send.addEventListener("click",()=>{deleteTitles();generateAPIResponse(input.value)})
  mode.addEventListener("click",()=>{
    if(nbMode%2!=0){
      darkMode();
    }else{
      lightMode();
    }
  })
  deleteAll.addEventListener("click",fundeleteAll);


  plan.addEventListener("click",()=>{deleteTitles();generateAPIResponse("Help me a plan game night with my 5 best friends to under $100.")});
  tips.addEventListener("click",()=>{deleteTitles();generateAPIResponse("What are the best tips to improve my public speaking skills?")});
  news.addEventListener("click",()=>{deleteTitles();generateAPIResponse("Can you help me find the latest news on web development?")});
  code.addEventListener("click",()=>{deleteTitles();generateAPIResponse("Write JavaScript code to sum all elements in an array.")});


  plan.addEventListener("mouseover",()=>{
    if(nbMode%2!=0){
      plan.style.transition="1s ease";
      plan.style.backgroundColor="#434343";
    }else{
      plan.style.transition="1s ease";
      plan.style.backgroundColor="#cdd2d8b5";
    }
  });
  plan.addEventListener("mouseout",()=>{
    if(nbMode%2!=0){
      plan.style.backgroundColor="#323232";
    }else{
      plan.style.backgroundColor="#cdd2d8";
    }
  });
  tips.addEventListener("mouseover",()=>{
    if(nbMode%2!=0){
      tips.style.transition="1s ease";
      tips.style.backgroundColor="#434343";
    }else{
      tips.style.transition="1s ease";
      tips.style.backgroundColor="#cdd2d8b5";
    }
  });
  tips.addEventListener("mouseout",()=>{
    if(nbMode%2!=0){
      tips.style.backgroundColor="#323232";
    }else{
      tips.style.backgroundColor="#cdd2d8";
    }
  });
  news.addEventListener("mouseover",()=>{
    if(nbMode%2!=0){
      news.style.transition="1s ease";
      news.style.backgroundColor="#434343";
    }else{
      news.style.transition="1s ease";
      news.style.backgroundColor="#cdd2d8b5";
    }
  });
  news.addEventListener("mouseout",()=>{
    if(nbMode%2!=0){
      
      news.style.backgroundColor="#323232";
    }else{
      news.style.backgroundColor="#cdd2d8";
    }
  });
  code.addEventListener("mouseover",()=>{
    if(nbMode%2!=0){
      code.style.transition="1s ease";
      code.style.backgroundColor="#434343";
    }else{
      code.style.transition="1s ease";
      code.style.backgroundColor="#cdd2d8b5";
    }
  });
  code.addEventListener("mouseout",()=>{
    if(nbMode%2!=0){
      code.style.backgroundColor="#323232";
    }else{
      code.style.backgroundColor="#cdd2d8";
    }
  });