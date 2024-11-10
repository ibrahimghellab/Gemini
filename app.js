const key="AIzaSyAXv1l3XcVal68_fA7eeX7Jnlbrpf4pQPc";
let URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

const res=document.getElementById("response");
const input=document.getElementById("userInput");

const generateAPIResponse=async(messageUser)=>{
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
  res.textContent=data.candidates[0].content.parts[0].text;
 
}



  input.addEventListener("keydown",function(event) {
    if(event.code=='Enter'){
        generateAPIResponse(input.value);
    }
    
  })


