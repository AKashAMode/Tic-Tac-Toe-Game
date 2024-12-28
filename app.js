

const boxes = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let currentPlayer = 'X';

function renderBoxes(){
 const allBoxes = document.querySelectorAll('.box');

allBoxes.forEach((boxElement, i)=> {
if(boxes[i] === 'O'){
    boxElement.innerHTML = 'O';
}else if(boxes[i] === 'X'){
    boxElement.innerHTML = "X"; 
}else{
    boxElement.innerHTML = "";  
} 

  });
}


function isPlayerPresent(place, player){

    let first = place[0];
    let second = place[1];
    let third = place[2];

    if(boxes[first] == player && boxes[second] == player && boxes[third] == player){
        return true;
    }else{
        return false;
    }

}



function playerWinCheck(){
    if(isPlayerPresent([0,1,2], 'X')){
          alert('Player X is Win');
    }else if(isPlayerPresent([3,4,5], 'X')){
        alert('Player X is Win');
    }else if(isPlayerPresent([6,7,8], 'X')){
        alert('Player X is Win');
    }else if(isPlayerPresent([0,3,6], 'X')){
        alert('Player X is Win');
    }else if(isPlayerPresent([1,4,7], 'X')){
        alert('Player X is Win');
    }else if(isPlayerPresent([2,5,8], 'X')){
        alert('Player X is Win');
    }else if(isPlayerPresent([0,4,8], 'X')){
        alert('Player X is Win');
    }else if(isPlayerPresent([2,4,6], 'X')){
        alert('Player X is Win');
  }

if(isPlayerPresent([0,1,2], 'O')){
    alert('Player O is Win');
}else if(isPlayerPresent([3,4,5], 'O')){
  alert('Player O is Win');
}else if(isPlayerPresent([6,7,8], 'O')){
  alert('Player O is Win');
}else if(isPlayerPresent([0,3,6], 'O')){
    alert('Player O is Win');
}else if(isPlayerPresent([1,4,7], 'O')){
  alert('Player O is Win');
}else if(isPlayerPresent([2,5,8], 'O')){
  alert('Player O is Win');
}else if(isPlayerPresent([0,4,8], 'O')){
  alert('Player O is Win');
}else if(isPlayerPresent([2,4,6], 'O')){
  alert('Player O is Win');
 }

}


function clickBox(boxNum){
if( boxes[boxNum] !== -1){
    alert("invalid move !!!!")
    return;
}

 boxes[boxNum] = currentPlayer;
 renderBoxes();

 if(currentPlayer == "X"){
    currentPlayer = "O"
 }else{
    currentPlayer = "X";
 }
 playerWinCheck();

 let PlayerTurn = document.getElementById('currentPlayer');
   PlayerTurn.innerText = currentPlayer;
}


function reSetBoxes(){
  boxes.fill(-1);
  renderBoxes();
}