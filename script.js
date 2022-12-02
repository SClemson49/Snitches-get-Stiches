// console.log('linked!')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const canvas = document.querySelector('canvas')
const timer = document.querySelector('#top-right')
const playerOne = document.querySelector('#bottom-left')

canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

// console.log(startBtn, resetBtn, canvas, timer)


const context = canvas.getContext('2d')
// console.log(context)

// context.fillStyle = 'blue'
// context.fillRect(10, 75, 10, 10)

// player object
// function drawBox(x,y,width,height,color){
//     context.fillStyle = color
//     context.fillRect(x, y, width, height)
// }
// drawBox(200,150,45,75, 'green')


// game objects class
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
const gameLoopInterval = setInterval(gameLoop, 60)
const players = new Player(50, 350, 50, 50, 'blue')
const enemy = new Enemy(500, 350, 50, 50, 'red')
const goal = new Goal(1500, 350, 15, 15, 'yellow')
const pressedKeys = {}

// start button - timer

startBtn.addEventListener('click', function (){
 var counter = 5;
 setInterval(function(){
    counter --;
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




    

// enemy movement


// user input to move
function handleMovement() {
    const speed = 7
    // console.log(e)
    // switch (e.key){
    //     case('w'):
    //         players.y -= speed
    //         break
    //     case('s'):
    //         players.y += speed
    //         break
    //     case('a'):
    //         players.x -= speed
    //         break
    //     case('d'):
    //         players.x += speed
    //         break
    if (pressedKeys.w) {
        players.y -= speed
    }
    if (pressedKeys.s) {
        players.y += speed
    }
    if (pressedKeys.a) {
        players.x -= speed
    }
    if (pressedKeys.d) {
        players.x += speed
    }
}

document.addEventListener('keydown', e => pressedKeys[e.key] = true)
document.addEventListener('keyup', e => pressedKeys[e.key] = false)

//gameLoop -- GAME LOGIC --

function gameLoop(){
    context.clearRect(0,0, canvas.width, canvas.height)
    // if (detectHit(players, enemy)){
        handleMovement()


    // detect hit
    if (detectHit()){
        //end game
        console.log('game over')
        // players.alive = false
        playerOne.innerText = "Player one has died"
        timer.innerText = "YOU DIED"
    }
    if (detectWin()){
        //end game
        console.log('WINNER')
        // players.alive = false
        playerOne.innerText = "Player one has caught the Snitch"
        timer.innerText = "NEXT ROUND"
    }
  
    players.render()
    
    enemy.render()

    goal.render()
}
// enemy movement


// collision detection
// axis aligned bounding box collision detection. AABB collision detection

function detectHit(){
    const left = players.x + players.width >= enemy.x
    const right = players.x <= enemy.x + enemy.width
    const top = players.y + players.height >= enemy.y
    const bottom = players.y <= enemy.y + enemy.height
return left && right && top && bottom

    // console.log(left, right, left && right)
    // console.log(left, right, top, bottom)
}
function detectWin(){
    const left = players.x + players.width >= goal.x
    const right = players.x <= goal.x + goal.width
    const top = players.y + players.height >= goal.y
    const bottom = players.y <= goal.y + goal.height
return left && right && top && bottom
}
