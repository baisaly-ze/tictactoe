// let boxes = document.querySelectorAll(".box")
// let resetBtn= document.querySelector("#reset")
// let newGameBtn=document.querySelector("#newbtn")
// let msg=document.querySelector("#msg")
// let msgContainer=document.querySelector(".msg-container")



// let turnO= true;
// let count = 0;

// const winPatterns=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]

// const resetGame=()=>{
//     turnO=true;
//     enableBoxes();
//     msgContainer.classList.add("hide")
// }

// const disableBoxes=()=>{
//     for(let box of boxes){
//         box.disabled=true
//     }
// }
// const enableBoxes=()=>{
//     for(let box of boxes){
//         box.disabled=false
//         box.innerText=""
//     }
//     // msgContainer.classList.add("hide")
// }

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
       
//         if(turnO){
//             box.innerText="0"
//             turnO=false;
//         }else{
//             box.innerText="X"
//             turnO=true;
//         }
//         box.disabled=true;
//         count++

//         let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//         })
//         })

//         const gameDraw = () => {
//             msg.innerText = `Game was a Draw.`;
//             msgContainer.classList.remove("hide");
//             disableBoxes();
//           };




//         const showWinner=(winner)=>{
//             msg.innerText=`Congratulations,winner is ${winner}`
//             msgContainer.classList.remove("hide")
//             // alert(`Player ${winner} wins!`)
//             disableBoxes()
//         }


//         const checkWinner=()=>{
//             for(let pattern of winPatterns){
//              let pos1Val=boxes[pattern[0]].innerText   
//              let pos2Val=boxes[pattern[1]].innerText   
//              let pos3Val=boxes[pattern[2]].innerText 
             
//              if (pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
//                 if (pos1Val === pos2Val && pos2Val === pos3Val) {
//                   showWinner(pos1Val);
//                   return true;
//                 }
//               }
//             }
//           };


// newGameBtn.addEventListener("click",resetGame)
// resetBtn.addEventListener("click",resetGame)





let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw
let gameActive = true; // Track game state

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  gameActive = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  // msg.innerText.style.color="blue"
  msgContainer.classList.remove("hide");
  disableBoxes();
  gameActive = false;
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  gameActive = false;
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
  return false;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!gameActive) return;

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    if (checkWinner()) return;

    if (count === 9) {
      gameDraw();
    }
  });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);