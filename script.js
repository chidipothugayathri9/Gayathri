
const words=['Python full stack Developer','Java','Web Developer','CSE Student'];
let i=0,j=0,del=false;
const el=document.getElementById('typing');
setInterval(()=>{
 const w=words[i];
 if(!del){j++; if(j===w.length) del=true;}
 else{j--; if(j===0){del=false;i=(i+1)%words.length;}}
 el.textContent=w.substring(0,j);
},120);

document.getElementById('themeBtn').onclick=()=>document.body.classList.toggle('light');
