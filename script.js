
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
const goal = new Goal(1400, 135, 15, 15, 'yellow')

const player1 = new Player(10, 125, 50, 50, 'blue')
const player2 = new Player(10, 125, 50, 50, 'green')




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
        player1.y -= speed
    }
    if (pressedKeys.s) {
        player1.y += speed
    }
    if (pressedKeys.a) {
        player1.x -= speed
    }
    if (pressedKeys.d) {
        player1.x += speed
    }
    if (pressedKeys.w) {
        player2.y -= speed
    }
    if (pressedKeys.s) {
        player2.y += speed
    }
    if (pressedKeys.a) {
        player2.x -= speed
    }
    if (pressedKeys.d) {
        player2.x += speed
    }
}

let currentPlayer = 'p1'

function switchPlayer(currentPlayer) {
    if (currentPlayer === 'p1') {
      player2 = 'p2';
    } else {
      player1 = 'p1';
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
    if (detectHit0()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit1()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit2()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit3()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit4()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit5()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit6()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit7()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit8()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }
    if (detectHit9()){
        gameActive = false
        //end game
        console.log('game over')
        playerOneName.innerText = "Player one has died"
        timer.innerText = "YOU DIED" 
        
        
    }

        
        
    
    if (detectWin1()){
        gameActive = false
        //end game
        console.log('WINNER')
        playerOneName.innerText = "Player One has caught the Snitch"
        timer.innerText = "NEXT ROUND"
       }


        

    

    player1.render()    
    // player2.render()    
    enemy0.render()
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
const enemy0 = new Enemy(100 ,-500, 50, 150, 'red',3) // enemy speed
const enemy1 = new Enemy(250 ,-100, 50, 50, 'black',3) // enemy speed
const enemy2 = new Enemy(400 ,-200, 50, 350, 'white',3) // enemy speed
const enemy3 = new Enemy(550 ,-500, 50, 150, 'pink',3) // enemy speed
const enemy4 = new Enemy(750 ,-500, 50, 50, 'purple',3) // enemy speed
const enemy5 = new Enemy(900 ,-500, 50, 150, 'orange',3) // enemy speed
const enemy6 = new Enemy(1050 ,-500, 50, 50, 'yellow',3) // enemy speed
const enemy7 = new Enemy(1050 ,-100, 50, 50, 'cyan',3) // enemy speed
const enemy8 = new Enemy(1050 ,-3000, 50, 350, 'lightpurple',3) // enemy speed
const enemy9 = new Enemy(1050 ,-1000, 50, 350, 'gray',3) // enemy speed

const updateEnemy0 = function(){

   
    requestAnimationFrame(updateEnemy0)
    enemy0.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy0()

const updateEnemy1 = function(){

   
    requestAnimationFrame(updateEnemy1)
    enemy1.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy1()

const updateEnemy2 = function(){

   
    requestAnimationFrame(updateEnemy2)
    enemy2.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy2()

const updateEnemy3 = function(){

   
    requestAnimationFrame(updateEnemy3)
    enemy3.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy3()

const updateEnemy4 = function(){

   
    requestAnimationFrame(updateEnemy4)
    enemy4.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy4()

const updateEnemy5 = function(){

   
    requestAnimationFrame(updateEnemy5)
    enemy5.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy5()

const updateEnemy6 = function(){

   
    requestAnimationFrame(updateEnemy6)
    enemy6.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy6()

const updateEnemy7 = function(){

   
    requestAnimationFrame(updateEnemy7)
    enemy7.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy7()

const updateEnemy8 = function(){

   
    requestAnimationFrame(updateEnemy8)
    enemy8.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy8()

const updateEnemy9 = function(){

   
    requestAnimationFrame(updateEnemy9)
    enemy9.update();
  
    if ( (this.y + this.width) > window.width){
    this.dy = -this.dy;
  }
}
updateEnemy9()



// collision detection
// axis aligned bounding box collision detection. AABB collision detection

function detectHit0(){
    const left = player1.x + player1.width >= enemy0.x
    const right = player1.x <= enemy0.x + enemy0.width
    const top = player1.y + player1.height >= enemy0.y
    const bottom = player1.y <= enemy0.y + enemy0.height
return left && right && top && bottom 
}
function detectHit1(){
    const left = player1.x + player1.width >= enemy1.x
    const right = player1.x <= enemy1.x + enemy1.width
    const top = player1.y + player1.height >= enemy1.y
    const bottom = player1.y <= enemy1.y + enemy1.height
return left && right && top && bottom 
}
function detectHit2(){
    const left = player1.x + player1.width >= enemy2.x
    const right = player1.x <= enemy2.x + enemy2.width
    const top = player1.y + player1.height >= enemy2.y
    const bottom = player1.y <= enemy2.y + enemy2.height
return left && right && top && bottom 
}
function detectHit3(){
    const left = player1.x + player1.width >= enemy3.x
    const right = player1.x <= enemy3.x + enemy3.width
    const top = player1.y + player1.height >= enemy3.y
    const bottom = player1.y <= enemy3.y + enemy3.height
return left && right && top && bottom 
}
function detectHit4(){
    const left = player1.x + player1.width >= enemy4.x
    const right = player1.x <= enemy4.x + enemy4.width
    const top = player1.y + player1.height >= enemy4.y
    const bottom = player1.y <= enemy4.y + enemy4.height
return left && right && top && bottom 
}
function detectHit5(){
    const left = player1.x + player1.width >= enemy5.x
    const right = player1.x <= enemy5.x + enemy5.width
    const top = player1.y + player1.height >= enemy5.y
    const bottom = player1.y <= enemy5.y + enemy5.height
return left && right && top && bottom 
}
function detectHit6(){
    const left = player1.x + player1.width >= enemy6.x
    const right = player1.x <= enemy6.x + enemy6.width
    const top = player1.y + player1.height >= enemy6.y
    const bottom = player1.y <= enemy6.y + enemy6.height
return left && right && top && bottom 
}
function detectHit7(){
    const left = player1.x + player1.width >= enemy7.x
    const right = player1.x <= enemy7.x + enemy7.width
    const top = player1.y + player1.height >= enemy7.y
    const bottom = player1.y <= enemy7.y + enemy7.height
return left && right && top && bottom 
}
function detectHit8(){
    const left = player1.x + player1.width >= enemy8.x
    const right = player1.x <= enemy8.x + enemy8.width
    const top = player1.y + player1.height >= enemy8.y
    const bottom = player1.y <= enemy8.y + enemy8.height
return left && right && top && bottom 
}
function detectHit9(){
    const left = player1.x + player1.width >= enemy9.x
    const right = player1.x <= enemy9.x + enemy9.width
    const top = player1.y + player1.height >= enemy9.y
    const bottom = player1.y <= enemy9.y + enemy9.height
return left && right && top && bottom 
}



function detectWin1(){
    const left = player1.x + player1.width >= goal.x
    const right = player1.x <= goal.x + goal.width
    const top = player1.y + player1.height >= goal.y
    const bottom = player1.y <= goal.y + goal.height
return left && right && top && bottom
}



