const buttarray = [[], [], []];
buttarray[0][0] = document.querySelector("[data-button-1-1]");
buttarray[0][1] = document.querySelector("[data-button-1-2]");
buttarray[0][2] = document.querySelector("[data-button-1-3]");
buttarray[1][0] = document.querySelector("[data-button-2-1]");
buttarray[1][1] = document.querySelector("[data-button-2-2]");
buttarray[1][2] = document.querySelector("[data-button-2-3]");
buttarray[2][0] = document.querySelector("[data-button-3-1]");
buttarray[2][1] = document.querySelector("[data-button-3-2]");
buttarray[2][2] = document.querySelector("[data-button-3-3]");


var player1 = true;
var player2 = true;

const datax = document.querySelector("[data-x]");
const datay = document.querySelector("[data-y]");

var answerMatrix = [["P", "P", "P"], ["P", "P", "P"], ["P", "P", "P"],];
const MatrixOfX = [ ["X", "X", "X"], ["X", "X", "X"], ["X", "X", "X"],];
const MatrixOfO = [["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"],];

window.onload = startFuction(){

}

for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        
        buttarray[i][j].addEventListener('click',button =>{
            buttonClicked(i,j);
        });
    }
}




