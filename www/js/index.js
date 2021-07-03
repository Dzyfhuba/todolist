
document.addEventListener('DOMContentLoaded', function () {
    
    var todoList = [];
    var addId = document.getElementById("add");
    var todoId = document.getElementById("todo");
    todoId.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
      event.preventDefault();
      addEvent();
}
});
    addId.addEventListener("click", function(event){
        addEvent();
    });


var completed = function(id, isCompleted){
    var idNum = document.getElementById(id);
    if(!isCompleted.value){
        idNum.style.backgroundImage = "linear-gradient(to left,rgb(20, 215, 4 ),rgb(210, 244, 208 )";
    }
    else{
        idNum.style.backgroundImage = "linear-gradient(to left,rgb(153, 0, 0), rgb(255, 51, 51))";
    }
    isCompleted.value = !isCompleted.value;
    
}

var deleted = function(idn){
    var divn = document.getElementById(idn);
    divn.remove();
}

var addEvent = function(){
    var isCompleted = {
        value:0
    };
    var todoValue = todoId.value;
    if(todoValue===""){
        alert("please enter something");
    }
    else{
        todoList.push(todoValue);
    var len = todoList.length;
    var listId = document.getElementById("List");
    
    var mainDiv = document.createElement("div");
    var divName = "maindiv"+len;                
    mainDiv.setAttribute("id",divName);
    
    var spanTag = document.createElement("span");
    var para = document.createElement("p");
    var idName = "ListItem"+len;
    para.setAttribute("class","Lists"); 
    para.setAttribute("id",idName);
    var ptextNode = document.createTextNode(todoValue);
    para.appendChild(ptextNode);
    spanTag.appendChild(para);
    mainDiv.appendChild(spanTag);
    var tick = document.createElement("button");
    // var btextNode = document.createTextNode("✔️");
    var btextNode = document.createTextNode("Selesai");
    tick.setAttribute("class","coptions");
    tick.appendChild(btextNode);
    mainDiv.appendChild(tick);
    var bin = document.createElement("button");
    // var bintext = document.createTextNode("🗑️");
    var bintext = document.createTextNode("Hapus");
    bin.appendChild(bintext);
    bin.setAttribute("class","coptions");
    mainDiv.appendChild(bin);

    var brTag = document.createElement("br");
    mainDiv.appendChild(brTag);

    listId.appendChild(mainDiv);
    tick.addEventListener("click", function(){
        completed(idName, isCompleted);
    });
    bin.addEventListener("click",function(){
        deleted(divName);
    });

    //removing data in input field
    todoId.value = "";
    }
    
}
});


