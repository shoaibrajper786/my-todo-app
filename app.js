var list = document.getElementById("list")

// var delAll = document.getElementById("allDel")



function addItem(){

    var input = document.getElementById('todo')

    // Creating li element//

    var li = document.createElement("li")

    var liText = document.createTextNode(input.value)
    li.appendChild(liText)
    li.setAttribute("class", "lihai")

    // Creating Delete Button//

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")

    delBtn.appendChild(delText)  

    delBtn.setAttribute("Class","Btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    li.appendChild(delBtn)
    
    // create edit button /// 

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")

    editBtn.appendChild(editText)
    editBtn.setAttribute("class" , "Btn")
    editBtn.setAttribute("onclick", "editItem(this)")
    li.appendChild(editBtn)
    
    

    list.appendChild(li)


    input.value = ""

    console.log(list)
}

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
   list.innerHTML= "";
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt ("Enter new text", val)
    e.parentNode.firstChild.nodeValue = editVal
}





