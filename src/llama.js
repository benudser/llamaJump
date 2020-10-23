export default class Character {

    constructor(gameHeight, gameWidth) {
        this.width =  40;
        this.height = 40;

        this.gameWidth = this.gameWidth;
        this.gameHeight = this.gameHeight;

        this.jumping = false;

        this.position = {
            x: 50,
            y: 300
        };

       this.velocity = {
           x: 0,
           y: 0
       }

    }


    moveLeft(){
        this.velocity.x -= 3;
    }

    moveRight(){
        this.velocity.x += 3;
    }

    jump(){
        this.jumping = true
        this.velocity.y -= 30;

    }


    draw(context) {
        context.fillStyle = 'red';
        context.fillRect( 
            this.position.x,
            this.position.y,
            this.width,
            this.height 
            );
    }

    update(context) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // gravity
        this.velocity.y += 1.5;

        this.velocity.x *= 0.9;
        this.velocity.y *= 0.9;

        if(this.position.y >= 500){

            this.position.y = 500;
            this.velocity.y = 0;
            this.jumping  = false;
        }

        if(this.position.x > 800){
            this.position.x = 0;
        }else if(this.position.x < 0){
            this.position.x = 800;
        }
     
        

        context.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height 
            );

       

        
        
    }

   


    
}