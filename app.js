let initialMsgs = { first: "hello", second: "bye"};

//add initial messages from JSON
window.onload = function(){
  let jsonStr = JSON.stringify(initialMsgs);
  let jsonObj = JSON.parse(jsonStr)
  let jsonObjValue = Object.values(jsonObj)
for(let i=0; i<jsonObjValue.length;i++){
msg = jsonObjValue[i]
this.newMessage(msg)
}
}

//load all messages
var myMessagelist = document.getElementsByTagName("LI");
for (let i = 0; i < initialMsgs.length; i++) {
  let span = document.createElement("BUTTON");
  let msg = document.createTextNode("x");
  span.className = "close";
  span.appendChild(msg);
  myMessagelist[i].appendChild(span);
}

for (let i = 0; i < myMessagelist.length; i++) {
  let span = document.createElement("SPAN");
  let msg = document.createTextNode("x");
  span.className = "close";
  span.appendChild(msg);
  myMessagelist[i].appendChild(span);
}




// Delete one message
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add new message
function newMessage(message) {
  var li = document.createElement("li");
  if (message){
    var t = document.createTextNode(message);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
  } else{
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Please type a message!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  }
  //create close button
  var span = document.createElement("BUTTON");
  var txt = document.createTextNode("x");
  span.className = "removeBtn";

  span.appendChild(txt);
  li.appendChild(span);

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     //remove element from list?
  //     div.style.display = "none";
  //   }
  // }

  li.addEventListener('click', e => {
    this.removeMessage(li)
});
}

// remove one message
function removeMessage(li) {
  let ul = document.getElementById("myUL");
  ul.removeChild(li);
}

// clear list of messages
function clearMessages() {
  let ul = document.getElementById("myUL");
  while(ul.firstChild ){
    ul.removeChild(ul.firstChild );
  }
}


// clear input
function clearInput() {
  document.getElementById("myInput").value = "";
}
