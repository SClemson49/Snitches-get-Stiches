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
const goal = new Goal(1500, 125, 15, 15, 'yellow')

const player = new Player(5, 100, 50, 50, 'blue')
let currentPlayer = 'p1'

function switchPlayer(currentPlayer) {
    if (currentPlayer === 'p1') {
      player = 'p2';
    } else {
      player = 'p1';
    }
}



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

    

const pressedKeys = {}

// user input to move
function handleMovement() {
    if (!gameActive){
        return}
    
const speed = 10
    if (pressedKeys.w) {
        player.y -= speed
    }
    if (pressedKeys.s) {
        player.y += speed
    }
    if (pressedKeys.a) {
        player.x -= speed
    }
    if (pressedKeys.d) {
        player.x += speed
    }
}



document.addEventListener('keydown', e => pressedKeys[e.key] = true)
document.addEventListener('keyup', e => pressedKeys[e.key] = false)

//gameLoop -- GAME LOGIC --
let gameActive = true

function gameLoop(){
    context.clearRect(0,0, canvas.width, canvas.height)

        handleMovement()
let currentPlayer = player
    
    // detect hit
    if (detectHit()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectWin()){
        gameActive = false
        //end game
        console.log('WINNER')
        playerOneName.innerText = "Player one has caught the Snitch"
        timer.innerText = "NEXT ROUND"
       }

        

    

    player.render()    
    enemy.render()
    goal.render()


    }   

//enemies
const enemy = new Enemy(100  ,-100, 50, 50, 'red',5) // enemy speed

const updateEnemy = function(){

   
    requestAnimationFrame(updateEnemy)
    enemy.update();
  
}
updateEnemy()


// collision detection
// axis aligned bounding box collision detection. AABB collision detection

function detectHit(){
    const left = player.x + player.width >= enemy.x
    const right = player.x <= enemy.x + enemy.width
    const top = player.y + player.height >= enemy.y
    const bottom = player.y <= enemy.y + enemy.height
return left && right && top && bottom 
}

function detectWin(){
    const left = player.x + player.width >= goal.x
    const right = player.x <= goal.x + goal.width
    const top = player.y + player.height >= goal.y
    const bottom = player.y <= goal.y + goal.height
return left && right && top && bottom
}

