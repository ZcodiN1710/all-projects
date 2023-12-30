const simulate = document.getElementById("simulate")
const fightGameContainer = document.querySelector(".fightGameContainer")
const reset = document.getElementById("reset")
const result = document.querySelector(".result")
const p1Healthscore = document.querySelector(".p1Healthscore")
const p2Healthscore = document.querySelector(".p2Healthscore")
const p1name = document.querySelector(".p1name")
const p2name = document.querySelector(".p2name")


const updateGame = (p1, p2, gameState) => {
    p1name.innerText = p1.name
    p2name.innerHTML = p2.name
    p1Healthscore.innerHTML = p1.health
    p2Healthscore.innerHTML = p2.health

    if (p1.health <= 0 || p2.health <= 0) {
        game.isOver = true
        gameState = game.isOver
        result.innerText = Game.declareWinner(game.isOver,p1,p2)
        return gameState
    }  
        
}


class players{
    constructor(name, health, attackDamage){
        this.name = name
        this.health = health
        this.attackDamage = attackDamage
    }

    strike(player , enemy, attackDmg){
        const damageAmount = Math.ceil(Math.random() * attackDmg)
        enemy.health -= damageAmount
        updateGame(p1,p2, game.isOver)
        
    }
    heal(player){
        const healAmount = Math.ceil(Math.random() * 5)
        player.health += healAmount
        updateGame(p1,p2, game.isOver)

    }
}

class game {
    constructor() {
        this.isOver = false
    }
    declareWinner(isOver,p1,p2){
        let message;
        if (isOver==true && p1.health <= 0) {
            message= `${p2.name } WINS👊`
            document.getElementById("victory").play()
            return message
        } if(isOver==true && p2.health <= 0) {
            message= `${p1.name } WINS👊`
            document.getElementById("victory").play()
            return message
        }
    }
    reset(p1,p2){
        p1.health = 100
        p2.health = 100
        this.isOver = false
        result.innerText = ""
        console.log("game reseted");

    }
}

const p1 = new players("Zak",100, 10)
const p2 = new players("Moh",100, 10)
// let p1 = player1
// let p2 = player2

const Game = new game()
    updateGame(p1,p2,game.isOver)




document.addEventListener("keydown", (eo) => {
    if (eo.key == "q" && p2.health > 0  && Game.isOver == false) {
        p1.strike(p1,p2,p1.attackDamage)
        document.getElementById("p1punch").play()
    } 
})

document.body.addEventListener("keydown", (eo) => {
    if (eo.key == "a" && p2.health > 0) {
        p1.heal(p1)
        document.getElementById("p1heal").play()
    } 
})


document.body.addEventListener("keydown", (eo) => {
    if (eo.key == "p" && p1.health > 0 && Game.isOver == false) {
        p2.strike(p2,p1,p2.attackDamage)
        document.getElementById("p2punch").play()
    } 
})


document.body.addEventListener("keydown", (eo) => {
    if (eo.key == "l" && p1.health > 0) {
        p2.heal(p2)
        document.getElementById("p2heal").play()
    } 
})




reset.onclick = () => {
    window.location.reload()
}