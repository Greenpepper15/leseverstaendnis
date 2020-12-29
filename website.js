

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

function retId(node_id){
    var inputF = document.getElementById(node_id);
    inputF.value = String(id);
    setTimeout(changeSite, 1000);
 }

function createBody(user_id, data){
  var toSend = {"user" : user_id, "Frage1": data}; // Bezeichner wichtig fuer Programmzuweisung !!
  return JSON.stringify(toSend);
}

  function removeVisability(node){
  setTimeout((node) => document.getElementById(node).style.visibility = "hidden", 3000);
}

function removeNode(){
  var jo = document.getElementById(node);  //Id string von dem zu löschenden element
  jo.parentNode.removeChild(jo);
}
