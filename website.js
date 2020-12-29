

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
var id; 
function initFingerprintJS() {
    FingerprintJS.load().then(fp => {
      // The FingerprintJS agent is ready.
      // Get a visitor identifier when you'd like to.
      fp.get().then(result => {
        // This is the visitor identifier:
        const visitorId = result.visitorId;
        id =  visitorId
        console.log(visitorId);
      });
    });
  }
initFingerprintJS();
function retId(node_id, nextQuestion){
    var inputF = document.getElementById(node_id);
    inputF.value = String(id);
    setTimeout(() => changeSite(nextQuestion), 1000);
 }

function createBody(user_id, data){
  var toSend = {"user" : user_id, "Frage1": data}; // Bezeichner wichtig fuer Programmzuweisung !!
  return JSON.stringify(toSend);
}

function removeNode(){
  var jo = document.getElementById(node);  //Id string von dem zu löschenden element
  jo.parentNode.removeChild(jo);
}

 function changeSite(link){
        window.location.replace(link);
}
function removeVisability(node){
    document.getElementById(node).style.visibility = "hidden";
    giveVisability('frage');
}
function giveVisability(node){
    document.getElementById(node).style.visibility = "visible";
}

function displayRanImage(node){
  var ranPage = Math.floor((Math.random() * 3) + 1);
  console.log(ranPage);
  if (ranPage == 1){
    document.getElementById(node).src = "Clarendon.PNG";
  }
  if (ranPage == 2){
    document.getElementById(node).src = "farben1.png";
  }
   if (ranPage == 3){
    document.getElementById(node).src = "MinionPro1.png";
  }
  setTimeout(() => removeVisability(node),3000);
}
//displayRanImage("text")
console.log('5')
