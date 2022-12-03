// console.log('linked!')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const canvas = document.querySelector('canvas')
const timer = document.querySelector('#top-right')
const playerOneName = document.querySelector('#bottom-left')
const playerTwoName = document.querySelector('#bottom-right')
const playerOneScore = document.querySelector('#playerOneScore')
const playerTwoScore = document.querySelector('#playerTwoScore')


canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

// console.log(startBtn, resetBtn, canvas, timer)


const context = canvas.getContext('2d')
// console.log(context)


// game objects classes
class Player {
    constructor(x, y, width, height, color){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    render() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Enemy {
    constructor(x, y, width, height, color, movement){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.movement = movement

        // this.dx = 1 * this.movement // move left right
        this.dy = 1 * this.movement
    }
    render() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
    update(){
        // this.x += this.dx; // move left right
        this.y += this.dy;
    }


       
    
}
class Goal {
    constructor(x, y, width, height, color){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    render() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}
 // player units
const gameLoopInterval = setInterval(gameLoop, 30)
const playerOne = new Player(5, 350, 50, 50, 'blue')
const playerTwo = new Player(10, 350, 50, 50, 'green')
const enemy = new Enemy(100, 0, 50, 50, 'red', 10) // enemy speed

const updateEnemy = function(){
    requestAnimationFrame(updateEnemy)
    enemy.update();
  
}
updateEnemy()
const goal = new Goal(1500, 350, 15, 15, 'yellow')
const pressedKeys = {}

// start button - timer

  


startBtn.addEventListener('click', function (){
    
 var counter = 5; //CHANGE ROUND TIMER
 setInterval(function(){
            counter --
            if (counter >= 0){
            timer.innerText = counter;
        }
        if (counter === 0) {
            clearInterval(counter)
            timer.innerText = ('Out of Time!')
        }
 }, 1000);
})
resetBtn.addEventListener("click", function(){
// console.log('reset btn clicked')


})


// boundries

    



// user input to move
function handleMovement() {
    const speed = 10
    if (pressedKeys.w) {
        playerOne.y -= speed
    }
    if (pressedKeys.s) {
        playerOne.y += speed
    }
    if (pressedKeys.a) {
        playerOne.x -= speed
    }
    if (pressedKeys.d) {
        playerOne.x += speed
    }
    if (pressedKeys.i) {
        playerTwo.y -= speed
    }
    if (pressedKeys.k) {
        playerTwo.y += speed
    }
    if (pressedKeys.j) {
        playerTwo.x -= speed
    }
    if (pressedKeys.l) {
        playerTwo.x += speed
    }
}


document.addEventListener('keydown', e => pressedKeys[e.key] = true)
document.addEventListener('keyup', e => pressedKeys[e.key] = false)

//gameLoop -- GAME LOGIC --

function gameLoop(){
    context.clearRect(0,0, canvas.width, canvas.height)

        handleMovement()

    
    // detect hit
    if (detectHitOne(enemy)){
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
    }
    if (detectWinOne()){
        //end game
        console.log('WINNER')
        playerOneName.innerText = "Player one has caught the Snitch"
        timer.innerText = "NEXT ROUND"
       }
        

    
    // PLAYER 2
    
    playerTwo.render()
    if (detectHitTwo()){
        //end game
        console.log('game over')
        playerTwoName.innerText = "Player Two has died"
        timer.innerText = "YOU DIED"
    }
    if (detectWinTwo()){
        //end game
        console.log('WINNER')
        playerTwoName.innerText = "Player Two has caught the Snitch"
        timer.innerText = "NEXT ROUND"
    }
  
    playerOne.render()
    
    enemy.render()

    goal.render()
}


// player turns

 
// enemy movement


// collision detection
// axis aligned bounding box collision detection. AABB collision detection

function detectHitOne(){
    const left = playerOne.x + playerOne.width >= enemy.x
    const right = playerOne.x <= enemy.x + enemy.width
    const top = playerOne.y + playerOne.height >= enemy.y
    const bottom = playerOne.y <= enemy.y + enemy.height
return left && right && top && bottom 
}

    // console.log(left, right, left && right)
    // console.log(left, right, top, bottom)

function detectWinOne(){
    const left = playerOne.x + playerOne.width >= goal.x
    const right = playerOne.x <= goal.x + goal.width
    const top = playerOne.y + playerOne.height >= goal.y
    const bottom = playerOne.y <= goal.y + goal.height
return left && right && top && bottom
}
//PLAYER TWO
function detectWinTwo(){
    const left = playerTwo.x + playerTwo.width >= goal.x
    const right = playerTwo.x <= goal.x + goal.width
    const top = playerTwo.y + playerTwo.height >= goal.y
    const bottom = playerTwo.y <= goal.y + goal.height
return left && right && top && bottom
}

function detectHitTwo(){
    const leftTwo = playerTwo.x + playerTwo.width >= enemy.x
    const rightTwo = playerTwo.x <= enemy.x + enemy.width
    const topTwo = playerTwo.y + playerTwo.height >= enemy.y
    const bottomTwo = playerTwo.y <= enemy.y + enemy.height
return leftTwo && rightTwo && topTwo && bottomTwo
}