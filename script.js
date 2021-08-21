const startNum=16;

function drawGrid(numBoxes){
    for(var i=0;i<numBoxes;i++){
        var div=document.createElement("div");
        div.classList.add("flexcontainer");
        for (var j=0;j<numBoxes;j++){
            var box=document.createElement("div");
            box.classList.add("box");
            div.appendChild(box);
        }
        document.getElementById("container").appendChild(div);
    
    }
    Boxes = document.querySelectorAll(".box");
    Boxes.forEach((Box) => {
    Box.addEventListener("mouseover", (e) => {
      Box.style.backgroundColor="black";
    });
    });

    
}

function clearGrid(){
    document.getElementById("container").innerHTML="";
}

drawGrid(startNum);
document.getElementById("changeSides").addEventListener("click",function(){var numBoxes=prompt("How many boxes per side?");clearGrid();drawGrid(numBoxes);});



