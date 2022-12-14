const board =document.querySelector('.board')
const score = document.querySelector('.score');
const resetBtn = document.querySelector('.resetBtn')
const context = board.getContext("2d"); // use to draw on the canvas or board

// board
const rows = 20; // number of rows
const cols = 20; // number of columns
const blockSize = 25; // size of each cell

//snake head
let snakeX = blockSize * 5; 
let snakeY = blockSize * 5;   
let snakeBody = [];

// snake move speed
let velocityX = 0;
let velocityY = 0;


// food
let foodX;
let foodY;

let endGame = false;
let count = 0;

window.onload = function(){
    board.height = rows * blockSize;
    board.width = cols * blockSize;

    randomFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10); // 100 miliseconds
    resetBtn.addEventListener('click', replay);
    score.innerHTML = count;
}

const update = () =>{
    if(endGame){
        return;
    }
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height)

    context.fillStyle="blue";
    context.fillRect(foodX, foodY, blockSize, blockSize)

    if(snakeX === foodX && snakeY === foodY){
        count++
        score.textContent = count
        snakeBody.push([foodX,foodY])
        randomFood();
    }

    for(let i = snakeBody.length-1; i>0; i--){
        snakeBody[i]=snakeBody[i-1]
    }

    if(snakeBody.length){
        snakeBody[0]= [snakeX, snakeY]
    }

    context.fillStyle ="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize)
    for(let i=0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }

    // EndGame Conditions

    if(snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize){
        endGame = true;
        alert("Game Over")
    }

    for(let i = 0; i < snakeBody.length; i++){
        if(snakeX===snakeBody[i][0] && snakeY===snakeBody[i][1]){
            endGame = true;
            alert("Game Over")
        }

    }

}

const randomFood = () =>{
    foodX = Math.floor(Math.random()* cols)*blockSize
    foodY = Math.floor(Math.random()* rows)*blockSize

}

const changeDirection = (e) =>{
    if(e.code ==="ArrowUp" && velocityY !== 1 ){
        velocityX = 0;
        velocityY = -1
    }
    else if(e.code === "ArrowDown" && velocityY !== -1){
        velocityX = 0;
        velocityY = 1;    
    }
    else if(e.code === "ArrowLeft" && velocityX !== 1 ){
        velocityX = -1;
        velocityY = 0;    
    }
    else if(e.code === "ArrowRight" && velocityX !== -1){
        velocityX = 1;
        velocityY = 0;    
    }

}

const replay =() =>{
    window.location.reload();
}