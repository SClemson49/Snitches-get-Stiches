
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
const goal = new Goal(1400, 90, 15, 15, 'yellow')

const player = new Player(5, 75, 50, 50, 'blue')
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
    enemy1.render()
    enemy2.render()
    enemy3.render()
    enemy4.render()
    enemy5.render()
    enemy6.render()
    enemy7.render()
    enemy8.render()
    enemy9.render()
    goal.render()


    }   

//enemies
const enemy = new Enemy(100  ,-500, 50, 500, 'red',3) // enemy speed
const enemy1 = new Enemy(50  ,-500, 50, 500, 'green',3) // enemy speed
const enemy2 = new Enemy(100  ,-500, 50, 500, 'yellow',3) // enemy speed
const enemy3 = new Enemy(100  ,-500, 50, 500, 'black',3) // enemy speed
const enemy4 = new Enemy(100  ,-500, 50, 500, 'white',3) // enemy speed
const enemy5 = new Enemy(100  ,-500, 50, 500, 'pink',3) // enemy speed
const enemy6 = new Enemy(100  ,-500, 50, 500, 'purple',3) // enemy speed
const enemy7 = new Enemy(100  ,-500, 50, 500, 'grey',3) // enemy speed
const enemy8 = new Enemy(100  ,-500, 50, 500, 'cyan',3) // enemy speed
const enemy9 = new Enemy(100  ,-500, 50, 500, 'darkblue',3) // enemy speed


const updateEnemy = function(){

   
    requestAnimationFrame(updateEnemy)
    enemy.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
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
// function detectHit(){
//     const left = player.x + player.width >= enemy1.x
//     const right = player.x <= enemy1.x + enemy1.width
//     const top = player.y + player.height >= enemy1.y
//     const bottom = player.y <= enemy1.y + enemy1.height
// return left && right && top && bottom 
// }
// function detectHit(){
//     const left = player.x + player.width >= enemy2.x
//     const right = player.x <= enemy2.x + enemy2.width
//     const top = player.y + player.height >= enemy2.y
//     const bottom = player.y <= enemy2.y + enemy2.height
// return left && right && top && bottom 
// }
// function detectHit(){
//     const left = player.x + player.width >= enemy3.x
//     const right = player.x <= enemy3.x + enemy3.width
//     const top = player.y + player.height >= enemy3.y
//     const bottom = player.y <= enemy3.y + enemy3.height
// return left && right && top && bottom 
// }
// function detectHit(){
//     const left = player.x + player.width >= enemy4.x
//     const right = player.x <= enemy4.x + enemy4.width
//     const top = player.y + player.height >= enemy4.y
//     const bottom = player.y <= enemy4.y + enemy4.height
// return left && right && top && bottom 
// }
// function detectHit(){
//     const left = player.x + player.width >= enemy5.x
//     const right = player.x <= enemy5.x + enemy5.width
//     const top = player.y + player.height >= enemy5.y
//     const bottom = player.y <= enemy5.y + enemy5.height
// return left && right && top && bottom 
// }
// function detectHit(){
//     const left = player.x + player.width >= enemy6.x
//     const right = player.x <= enemy6.x + enemy6.width
//     const top = player.y + player.height >= enemy6.y
//     const bottom = player.y <= enemy6.y + enemy6.height
// return left && right && top && bottom 
// }
// function detectHit(){
//     const left = player.x + player.width >= enemy7.x
//     const right = player.x <= enemy7.x + enemy7.width
//     const top = player.y + player.height >= enemy7.y
//     const bottom = player.y <= enemy7.y + enemy7.height
// return left && right && top && bottom 
// }
// function detectHit(){
//     const left = player.x + player.width >= enemy8.x
//     const right = player.x <= enemy8.x + enemy8.width
//     const top = player.y + player.height >= enemy8.y
//     const bottom = player.y <= enemy8.y + enemy8.height
// return left && right && top && bottom 
// }
// function detectHit(){
//     const left = player.x + player.width >= enemy9.x
//     const right = player.x <= enemy9.x + enemy9.width
//     const top = player.y + player.height >= enemy9.y
//     const bottom = player.y <= enemy9.y + enemy9.height
// return left && right && top && bottom 
// }

function detectWin(){
    const left = player.x + player.width >= goal.x
    const right = player.x <= goal.x + goal.width
    const top = player.y + player.height >= goal.y
    const bottom = player.y <= goal.y + goal.height
return left && right && top && bottom
}

