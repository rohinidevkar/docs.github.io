var password = "112233";

function passcheckk(){

if(document.getElementById('5678').value == password){
alert('correct password. Click ok to enter webpage.');
}

else
if(document.getElementById('pass1').value != password){
alert ('Wrong Password, Try Again.');
return false;
}
}