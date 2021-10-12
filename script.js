console.log(123)
//task1
$("#btn1").click(function (e) { 
    e.preventDefault();
    $("#square").toggleClass("hidden");
    
});


//task4
$("#colorSquare1,#colorSquare2,#colorSquare3,#colorSquare4,#colorSquare5,#colorSquare6,#colorSquare7,#colorSquare8,#colorSquare9").click(function(){
    let squareColors = [];      
    for( let i=0; i<9; i++){
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        squareColors.push(randomColor) ;         
    } 
    $("#colorSquare1").css({
        "background-color": squareColors[0]       
    });
    $("#colorSquare2").css({
        "background-color": squareColors[1]       
    });
    $("#colorSquare3").css({
        "background-color": squareColors[2]       
    });
    $("#colorSquare4").css({
        "background-color": squareColors[3]       
    });
    $("#colorSquare5").css({
        "background-color": squareColors[4]       
    });
    $("#colorSquare6").css({
        "background-color": squareColors[5]       
    });
    $("#colorSquare7").css({
        "background-color": squareColors[6]       
    });
    $("#colorSquare8").css({
        "background-color": squareColors[7]       
    });
    $("#colorSquare9").css({
        "background-color": squareColors[8]  
    });
});

//task5
var button = document. getElementById("btn5");
var itemNumber = 0;
    button. onclick = function() {
    itemNumber += 1;    
    };
function checkInput(txt) {        
        var ele = document.getElementsByTagName('input'); 

        // Loop through each element.
        for (i = 0; i < ele.length; i++) {

            // Check the element type
            if (ele[i].type == 'text' && ele[i].value == '') {
                button.disabled = true;    // Disable the button.
                return false;
            }
            else {
                button.disabled = false;   // Enable the button.
            }
        }
    }        

var currentYear = new Date().getFullYear();
$("#btn5").click(function (e) { 
    e.preventDefault();    
    var table = document.getElementById("table")
    var newRow = document.createElement("tr");
    var newNumber = document.createElement("td");
    var newName = document.createElement("td");
    var newSurname = document.createElement("td");
    var newAge = document.createElement("td");
    var enteredName = $("#firstName").val();
    var enteredSurname = $("#lastName").val();    
    var age = currentYear - ($("#birthday").val()).substring(0,4); 
    table.appendChild(newRow);
    newRow.appendChild(newNumber);
    newRow.appendChild(newName);
    newRow.appendChild(newSurname);
    newRow.appendChild(newAge);
    newNumber.innerText = (itemNumber);    
    newName.innerText = (enteredName);
    newSurname.innerText = (enteredSurname); 
    newAge.innerText = (age);    
});

//task3

let burger = document.getElementById("burg");
let menu = document.getElementById("men");
$("#burg").click(function (e) { 
    e.preventDefault();
    $("#men").toggleClass("menuShow");
});

//task2
$("#btn21").click(function (e) { 
    e.preventDefault();
    let newWidth = parseInt($("#newWidth").val());
    $("#movingSquare").css({
        "width": newWidth       
    });    
});
$("#btn22").click(function (e) { 
    e.preventDefault();
    let newHeight = parseInt($("#newHeight").val());
    $("#movingSquare").css({
        "height": newHeight      
    });    
});
$("#btn23").click(function (e) { 
    e.preventDefault();
    if ($("input[name=allignment]:checked")){
        let newAllignment = $("input[name=allignment]:checked").val();
        $("#referenceContainer").css({            
            "justify-content": newAllignment     
        });          
    }     
});
// $("#btn24").click(function (e) { 
//     e.preventDefault();
//     if ($("input[name=position]:checked")){
//         let newPosition = $("input[name=position]:checked").val();
//         let y = "collumn";
//         $("#referenceContainer").css({
//             "flex-direction" : y,
//             "justify-content": newPosition 
//         }); 
//         console.log(newPosition) 
//     }     
// });
