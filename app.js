function username(){
    var user=document.getElementById("name").value;
    if(user==""){
        document.getElementById("a").innerHTML="Username cannot be empty";
           
    }
    else if(!isNaN(user)){
        document.getElementById("a").innerHTML="Number not allowed";
    }
    else{
        document.getElementById("a").innerHTML="";
    }
}

function password(){
    var pswrd=document.getElementById("pass").value;
    if(pswrd==""){
        document.getElementById("b").innerHTML="Password cannot be empty";
    }
    else if(pswrd.length<8 || pswrd.length>15){
        document.getElementById("b").innerHTML="password should contain min 8 characters and max 15 characters";
}
else{
    document.getElementById("b").innerHTML="";
}
}
function phonenumber(){
    var phn=document.getElementById("phn").value;
    const emailReg = new RegExp(
        /^[6-9]\d{9}$/gi
      )
      var fyi=emailReg.test(phn);

      if(fyi==false)
      {
          document.getElementById("c").innerHTML="Phone Number invalid";

      }
      else{
        document.getElementById("c").innerHTML="";

      }

    // if(phn.charAt(0)!=9 && phn.charAt(0)!=8){
    //     document.getElementById("c").innerHTML="error";
    // }
    // else if(phn==""){
    //     document.getElementById("c").innerHTML="Phone Number cannot be empty";
    // }
    // else if(isNaN(phn)){
    //     document.getElementById("c").innerHTML="Text not allowed";
    // }
    // else if(phn.length<10){
    //     document.getElementById("c").innerHTML="phn no should be atleast 10";
    // }
   
    //     else{
    //         document.getElementById("c").innerHTML="";
    //     }
}
function email_id()
{
    var mail=document.getElementById("mail").value;
    const emailReg = new RegExp(
        /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
      )
      var fyi=emailReg.test(mail);
      if(fyi==false)
      {
          document.getElementById("d").innerHTML="Email not in proper format";
      }
      else{
        document.getElementById("d").innerHTML="";

      }
}

