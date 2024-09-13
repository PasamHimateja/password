window.onload=()=>{

    const password = document.getElementById("password");
    
    const generateBtn = document.getElementById("generateBtn");
    
    const copy = document.getElementById("copyBtn");
    
    const copied_p = document.getElementById("copied");
    
    let res ="";
    let chars = "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890!@#$_&^%()";
    
    generateBtn.onclick=()=>{
    res="";
        let n = chars.length;
        for(let i = 0; i < 8; i++){
            res +=chars[Math.floor(Math.random()*n)];
        }
        password.value = res;
    }
     
    copy.onclick=()=>{
        password.select();
        document.execCommand("copy");
        copied_p.style.display="block";
        navigator.vibrate(100);
        setTimeout(()=>{
            copied_p.style.display="none";
        }, 2000);
    }
        
    }