
            function submitclick(){
                let x=document.getElementById("sname").value;
                let y=document.getElementById("num").value;
                let z=document.getElementById("mail").value;
                let msg=document.getElementById("msg");
                let msg1=document.getElementById("msg1");
                let msg2=document.getElementById("msg2");
               
            if(x==""){
         document.getElementById("msg").innerHTML=`Name Must be Fill`;
         return false;
            }
            else if(y==""){
               alert(`Number Is Importent`);
               return false;
                     }
            if(z==""){
                msg2.innerText=`Mail-Id Is Importent`;
                return false;
            }
            
        }
           