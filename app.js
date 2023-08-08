var list = document.getElementById("list")

function sendtodo(){
    var val = document.getElementById("val");
    var li = document.createElement("li");
    var text = document.createTextNode(val.value);
    li.appendChild(text);


    //edit button
    var editbtn = document.createElement("button");
    var btext = document.createTextNode("Edit");
    editbtn.setAttribute("Class","btn")
    editbtn.setAttribute("onclick","edititem(this)")
    editbtn.appendChild(btext);
    

    // delete btn
    var delbtn = document.createElement("button");
    var btext = document.createTextNode("Delete");
    delbtn.setAttribute("Class","btn")
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.appendChild(btext);

    

   
    li.appendChild(editbtn)
    li.appendChild(delbtn)
    list.appendChild(li)
    val.value = ""
   
}


function deleteitem(e){
    e.parentNode.remove();
}

function deleteall(){
  list.innerHTML =""
}

function edititem(e){
   var val = prompt("enter new val",e.parentNode.firstChild.nodeValue);
   e.parentNode.firstChild.nodeValue = val;
}

