
function sendEmail() {
  var x = document.getElementById("myText").value;  
Email.send({
    Host : "smtp.mailtrap.io",
    Username : "af59f73491b60f",
    Password : "2dbe2d6e5727e0",
    To : 'recipient@example.com',
    From : "sender@example.com",
    Subject : id + "_" + "Frage1",
    Body :  createBody(id, x)
}).then(
  message => alert(message)
);
  //changePageRandom();
  var jo = document.getElementById("goole");
  jo.parentNode.removeChild(jo);
}

  function removeImage(){
  if (removeOnce) {
  var jo = document.getElementById("image");  //Id string von dem zu löschenden element
  jo.parentNode.removeChild(jo);
  removeOnce = false;
  document.getElementById("demo").innerHTML = "EINGABE !!!!"
  }
}
