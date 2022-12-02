// console.log('linked!')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const canvas = document.querySelector('canvas')
const timer = document.querySelector('#top-right')

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
const playerOne = new Player(50, 350, 50, 50, 'blue')



// user input to move
function handleMovement(e) {
    const speed = 5
    // console.log(e)
    switch (e.key){
        case('w'):
            playerOne.y -= speed
            break
        case('s'):
            playerOne.y += speed
            break
        case('a'):
            playerOne.x -= speed
            break
        case('d'):
            playerOne.x += speed
            break

    }
}
document.addEventListener('keydown', handleMovement)

//gameLoop -- GAME LOGIC --

function gameLoop(){
    context.clearRect(0,0, canvas.width, canvas.height)
    playerOne.render()
}


// collision detection