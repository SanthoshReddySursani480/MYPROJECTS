

const butn11 = document.querySelector('[data-button-1-1]')
const butn12 =  document.querySelector('[data-button-1-2]')
const butn13 =  document.querySelector('[data-button-1-3]')
const butn21 =  document.querySelector('[data-button-2-1]')
const butn22 =  document.querySelector('[data-button-2-2]')
const butn23 =  document.querySelector('[data-button-2-3]')
const butn31 =  document.querySelector('[data-button-3-1]')
const butn32 =  document.querySelector('[data-button-3-2]')
const butn33 =  document.querySelector('[data-button-3-3]')




var player1 = true;
var player2 = true;
const datax = document.querySelector('[data-x]')
const datay = document.querySelector('[data-y]')
var answerMatrix = [['P','P','P'],['P','P','P'],['P','P','P']]
const MatrixOfX = [['X','X','X'],['X','X','X'],['X','X','X']]
const MatrixOfO = [['O','O','O'],['O','O','O'],['O','O','O']]

window.onload = startFunction()

butn11.addEventListener('click',button =>{
    buttonClicked(11)
})

butn12.addEventListener('click',button =>{
    buttonClicked(12)
})

butn13.addEventListener('click',button =>{
    buttonClicked(13)
})

butn21.addEventListener('click',button =>{
    buttonClicked(21)
})

butn22.addEventListener('click',button =>{
    buttonClicked(22)
})

butn23.addEventListener('click',button =>{
    buttonClicked(23)
})

butn31.addEventListener('click',button =>{
    buttonClicked(31)
})

butn32.addEventListener('click',button =>{
    buttonClicked(32)
})

butn33.addEventListener('click',button =>{
    buttonClicked(33)
})

function startFunction(){
    const checkNumber = Math.random()
    console.log(checkNumber)
    if(checkNumber<0.5){
        player1 = true
        player2 = false
    }
    else{
        player1 = false
        player2 = true;
    }

    displayFirstTurn(player1,player2)
}

function displayFirstTurn(player1,player2){

    if(player1 == true){
        const el1 = document.getElementById('data-x')
        el1.style.color = 'yellow'
        const el2 = document.getElementById('data-y')
        el2.style.color = 'white'
    }
    else{
        const el1 = document.getElementById('data-x')
        el1.style.color = 'white'
        const el2 = document.getElementById('data-y')
        el2.style.color = 'yellow'
    }
    console.log(player1,' ',player2)
}

function buttonClicked(buttonId){
      
   markButton(buttonId)

   if(checkIfWon() == true){
    disableButtons()
    displayWon()
    return
   }
   if(completed()== true){
    disableButtons()
    displayDraw()
    return
   }
    changeTurn()
    displayFirstTurn(player1,player2)
}

function displayWon(){

    if(player1 == true){
        const ele = document.getElementById('data-x')
        ele.innerHTML = "X - WON"
    }
    else{
        const ele = document.getElementById('data-y')
        ele.innerHTML = "O - WON"
    }

}

function displayDraw(){
    const ele1 = document.getElementById('data-x')
    ele1.innerHTML = "DRAW"
    const ele = document.getElementById('data-y')
    ele.innerHTML = "DRAW"
}


function markButton(buttonId){
    var butt = buttonId.toString()
    var row = parseInt(butt.charAt(0))-1
    var col = parseInt(butt.charAt(1))-1;
    console.log(butt)
    const elem = document.getElementById(butt)
    if(player1 == true){
        elem.innerHTML = "X" 

        document.getElementById(butt).disabled = true;
        answerMatrix[row][col] = 'X'
    }
    else{
        elem.innerHTML = "O"
     document.getElementById(butt).disabled = true;
        answerMatrix[row][col] = 'O'
    }

}

function changeTurn(){
    player1=!player1
    player2=!player2
}


function checkIfWon(){
      console.log(answerMatrix)
    for(var i=0;i<3;i++){
        if((answerMatrix[i][0] ==  MatrixOfX[i][0] && answerMatrix[i][1] ==  MatrixOfX[i][1] && answerMatrix[i][2] ==  MatrixOfX[i][2])){

            console.log('checked')
            return true;  
        }
        if((answerMatrix[i][0] ==  MatrixOfO[i][0] && answerMatrix[i][1] == MatrixOfO[i][1] && answerMatrix[i][2] ==  MatrixOfO[i][2]  )){
            console.log('checked')
            return true;  
          }
        
    }
    for(var j=0;j<3;j++){
        if((answerMatrix[0][j] ==  MatrixOfX[0][j] && answerMatrix[1][j] ==  MatrixOfX[1][j] && answerMatrix[2][j] ==  MatrixOfX[2][j]  )){
            console.log('checked')
            return true;  
          }
          if((answerMatrix[0][j] ==  MatrixOfO[0][j] && answerMatrix[1][j] == MatrixOfO[1][j] && answerMatrix[2][j] ==  MatrixOfO[2][j]  )){
            console.log('checked')
            return true;  
            }
     
    }

       
        if((answerMatrix[0][0] ==  MatrixOfX[0][0] && answerMatrix[1][1] ==  MatrixOfX[1][1] && answerMatrix[2][2] ==  MatrixOfX[2][2]  )){
            console.log('checked')
            return true;  
          }
          if((answerMatrix[0][0] ==  MatrixOfO[0][0] && answerMatrix[1][1] == MatrixOfO[1][1] && answerMatrix[2][2] ==  MatrixOfO[2][2]  )){
            console.log('checked')
            return true;  
            }

            if((answerMatrix[2][0] ==  MatrixOfX[2][0] && answerMatrix[1][1] ==  MatrixOfX[1][1] && answerMatrix[0][2] ==  MatrixOfX[0][2]  )){
                console.log('checked')
                return true;  
              }
              if((answerMatrix[2][0] ==  MatrixOfO[2][0] && answerMatrix[1][1] == MatrixOfO[1][1] && answerMatrix[0][2] ==  MatrixOfO[0][2]  )){
                console.log('checked')
                return true;  
                }

    return false
}


 function completed(){

       for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(answerMatrix[i][j]=='P'){
                console.log(answerMatrix[i][j])
                return false;
            }
         }
       }
       return true;
    }

function disableButtons(){
    console.log('all buttons disabled')
    const e11 = document.getElementById('11')
    e11.style.backgroundColor = 'blue'
    e11.style.opacity=0.1
    e11.disabled=true;


    const e12 = document.getElementById('12')
    e12.style.backgroundColor = 'blue'
    e12.style.opacity=0.1
    e12.disabled=true;

    const e13= document.getElementById('13')
    e13.style.backgroundColor = 'blue'
    e13.style.opacity=0.1
    e13.disabled=true;

    const e21 = document.getElementById('21')
    e21.style.backgroundColor = 'blue'
    e21.style.opacity=0.1
    e21.disabled=true;

    const e22 = document.getElementById('22')
    e22.style.backgroundColor = 'blue'
    e22.style.opacity=0.1
    e22.disabled=true;

    const e23 = document.getElementById('23')
    e23.style.backgroundColor = 'blue'
    e23.style.opacity=0.1
    e23.disabled=true;

    const e31 = document.getElementById('31')
    e31.style.backgroundColor = 'blue'
    e31.style.opacity=0.1
    e31.disabled=true;

    const e32 = document.getElementById('32')
    e32.style.backgroundColor = 'blue'
    e32.style.opacity=0.1
    e32.disabled=true;

    const e33 = document.getElementById('33')
    e33.style.backgroundColor = 'blue'
    e33.style.opacity=0.1
    e33.disabled=true;

}




