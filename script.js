// console.log('linked!')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const canvas = document.querySelector('canvas')
const timer = document.querySelector('#top-right')
const playerOne = document.querySelector('#bottom-left')

canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

console.log(startBtn, resetBtn, canvas, timer)


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
 // player units
const gameLoopInterval = setInterval(gameLoop, 60)
const players = new Player(50, 350, 50, 50, 'blue')
const enemy = new Player(500, 350, 50, 50, 'red')




// user input to move
function handleMovement(e) {
    const speed = 5
    // console.log(e)
    switch (e.key){
        case('w'):
            players.y -= speed
            break
        case('s'):
            players.y += speed
            break
        case('a'):
            players.x -= speed
            break
        case('d'):
            players.x += speed
            break

    }
}
document.addEventListener('keydown', handleMovement)

//gameLoop -- GAME LOGIC --

function gameLoop(){
    context.clearRect(0,0, canvas.width, canvas.height)

    // detect hit
    if (detectHit()){
        //end game
        console.log('game over')
        // players.alive = false
        playerOne.innerText = "Player one has died"
    }
  
    players.render()
    
    enemy.render()
}


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

