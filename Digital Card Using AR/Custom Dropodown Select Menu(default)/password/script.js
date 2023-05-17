var password = "pass1";

function passcheck(){

if(document.getElementById('12345677').value != password){
alert ('Wrong Password, Try Again.');
return false;
}

if(document.getElementById('1234').value == password){
alert('correct password. Click ok to enter webpage.');
}
}