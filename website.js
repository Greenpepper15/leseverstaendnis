

function sendEmail(element,Frage) {
    Email.send({
      Host : "smtp.mailtrap.io",
      Username : "af59f73491b60f",
      Password : "2dbe2d6e5727e0",
      To : 'recipient@example.com',
      From : "sender@example.com",
      Subject : id + "_" + Frage,
      Body :  createBody(id, element)
  }).then(
    message => alert(message)
  );
}

function createBody(user_id, data){
  var toSend = {"user" : user_id, "Frage1": data}; // Bezeichner wichtig fuer Programmzuweisung !!
  return JSON.stringify(toSend);
}

  function removeVisability(node, massage){
  var jo = document.getElementById(node);  //Id string von dem zu löschenden element
  jo.parentNode.removeChild(jo);
  document.getElementById("demo").innerHTML = massage;
}
