function validation(){
    const name = document.getElementById("Pname").value.trim();
    const password = document.getElementById("Ppassword").value; 
    const repassword = document.getElementById("Rpassword").value;
    const message = document.getElementById("message");
if(password != repassword){
    message.textContent = "Password did not match!";
    message.style.color = "red";
    return false;
}
message.textContent = `Welcome, ${name}`;
message.style.color = "lightgreen";
return false;
}