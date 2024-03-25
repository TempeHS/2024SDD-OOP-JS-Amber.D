class player { 
    constructor (lives, score, positionX, positionY, bullets) {
        this.lives = lives;
        this.score = score;
        this.positionX = positionX;
        this.positionY = positionY;
        this.bullets = bullets;
    }
    updateScore (newScore) {
        this.score.push(newScore);
    }
    shoot () {
    if(this.bullets == 0 ){
        return ("out of bullets");
    } else {
        this.bullets = this.bullets - 1;
        return(this.bullets);
    }
    }
    remain () {
        if (this.lives == 0) {
            return("you died");
        } else { 
            this.lives = this.lives - 1;
            return(this.lives);
        }
    }
}

const p1 = new player(3, [2], 5, 4, 10);
console.log(p1);
console.log(Object.getOwnPropertyNames(p1));
p1.updateScore(300);



class enemies {
    constructor (number, positionX, positionY) {
        this.number = number;
        this.positionX = positionX; 
        this.positionY = positionY;
    }
    hit(pX, pY) {
        if ( this.positionX == pX && this.positionY == pY){ 
            p1.shoot();
            p1.remain();
            this.remainEnemy();
            return("hit");
        } else {
            p1.shoot();
            return("miss");
        }
    }  remainEnemy() {
        this.number = this.number - 1;
    }
}

const e1 = new enemies(4, 5, 4);
console.log(e1);
console.log(Object.getOwnPropertyNames(e1)); 
console.log(e1.hit(p1.positionX, p1.positionY));


/* Sample Notes
class Player {
    lives =3; 
    shootDelay = 2000; //ms
    yPos = 500;
    xPos = 500;
}

class Enemy {
    hp = 1;
    shootingDelay = 9000;
    yPos;
    xPos;
    score = 10;

    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}
const spaceship = new Player();
console.log(spaceship);
const alien1 = new Enemy(10, 10);
console.log(alien1);
*/