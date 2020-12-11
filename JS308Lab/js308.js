//homework1
    let table=document.querySelector('#hw1Table');
    // document.getElementById("")
// $('#hw1Table')
    let tableTr=document.createElement('tr');
    for(let i=1;i<=9;i++){
        table.appendChild(tableTr);
        let tableTd=document.createElement('td');
        // console.log("I"+i);
        let a =true;
        for(let j=1;j<=9;j++){
            tableTr.appendChild(tableTd);
            if(!a){
                // console.log("123");
                tableTd.innerHTML+="<br>"
            }else{
                // console.log("456");
                a=false;
            }
            tableTd.innerHTML+=i+"*"+j+"="+i*j;
            // console.log('II'+j)
        }
        tableTr.appendChild(tableTd);
    }
//homework2
function checkPwd(){
    console.log("123")
    let pwd=document.querySelector('#idPwd').value
    let pwdlen=pwd.length;
    let span=document.querySelector('#idsp');
    console.log(pwd);
    console.log(pwdlen);
    let regx=/^(?=.*[a-zA-Z])(?=.*\d).{6,16}&/
    if(pwd==""){
        span.innerHTML="必須輸入密碼"
    }else if(pwdlen <6){
        span.innerHTML="密碼必須六個字以上"
    }else if(!regx.test(pwd)){
        span.innerHTML="密碼格式錯誤"
    }
}

//homework3

//homework4

//homework5
