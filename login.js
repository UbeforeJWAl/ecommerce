function validate(){
    var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
    if(email=="admin@admin.com"&&password=="123456")
    {
        alert("login succesfully");
        window.open("home.html");
        return false;
    }
    else
    {
        alert("invalid credientials")
    }
   
}

function myfunction(){
    alert("submitted succesfully");

}