
const boxes = [-1,-1,-1,-1,-1,-1,-1,-1,-1];


function allClickBoxes(){
 const allBoxes = document.querySelectorAll('.box');

 allBoxes.forEach((boxElement, i)=> {

if(boxes[i] === 'X'){
    boxElement.innerHTML = "X";
}else if(boxes[i] === 'O'){
    boxElement.innerHTML = "O"; 
}else{
    boxElement.innerHTML = "O";  
} 

})

}
