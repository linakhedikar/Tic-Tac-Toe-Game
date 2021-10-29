// X => <i class="fas fa-times"></i>
// O => <i class="far fa-circle"></i>

// Game Music
let audioTurn = new Audio("ting.mp3");

// Selecting All "starting Page" Tags
let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

// Selecting All "Winner Page" Tags
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");

// change Turns
// False => X's Turn 
// True => O's Turn
let changeTurn = null;

// Select which you want to be X or O
choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click",()=>{
        if (chooseNow.id === "playerX") {
            changeTurn = false;
            // console.log(changeTurn);
            showChange.style.left = `0px`;
        } else {
            changeTurn = true;
            // console.log(changeTurn);
            showChange.style.left = `160px`;
        }
        startingPage.style.display = "none";
         mainPage.style.display = "block";     
    })
});

boxes.forEach(items =>{
    items.addEventListener("click",()=>{
        // Add "X" Icon If "ChangeTurn" = False
         // Add "O" Icon If "ChangeTurn" = True
         if (changeTurn == false) {
             items.innerHTML = `<i class="fas fa-times"></i>`;
             items.id = "X";
             items.style.pointerEvents = "none";
             showChange.style.left = `160px`;

             //change The "changeTurn" Value false Into True
             changeTurn = true;
             
         }else{
            items.innerHTML = `<i class="far fa-circle"></i>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            showChange.style.left = `0px`;

            //change The "changeTurn" Value false Into True
            changeTurn = false;
         }
         audioTurn.play();
         winningFunc();
         drawfunc();
    })
})

//All Possible Winning Combinations
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let winningFunc = ()=>{
    for (let a = 0; a<= 7; a++) {
        let b = winningCombinations[a];
        // console.log(b);
        if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
            continue;
        }else if (boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X") {
            // console.log("X is the Winner");

            //adding Winner text
            winnerName.innerText = `Player X Win The Game!`;
           
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
           
            //show Winner page & hide main page
            mainPage.style.display = "none";
            winner.style.display = "block";
            
        }
        else if (boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O") {
            // console.log("O is the Winner");

            //adding Winner text
            winnerName.innerText = `Player O Win The Game!`;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            //show Winner page & hide main page
            mainPage.style.display = "none";
            winner.style.display = "block";
        }
        else{
            continue;
        }
    }
}
//Match Draw function
let drawfunc =()=>{
    if (boxes[0].id != "" && boxes[1].id != "" && boxes[2].id != "" && boxes[3].id != "" && boxes[4].id != "" && boxes[5].id != "" && boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {
         //adding Draw text
         winnerName.innerText = `Match Draw!`;
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "none";
         //show Winner page & hide main page
         mainPage.style.display = "none";
         winner.style.display = "block";
    }
}
// Reset Game
quit.addEventListener("click",()=>{
    window.location.reload();
})