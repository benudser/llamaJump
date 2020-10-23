import {input} from '/src/index.js';

export default class Character {

    constructor(gameHeight, gameWidth) {

        this.image = document.getElementById("llama_img");

        this.width =  40;
        this.height = 40;

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
        this.velocity.x -= 1;
    }

    moveRight(){
        this.velocity.x += 1;
    }

    jump(){
        this.jumping = true;
        this.velocity.y -= 30;    
    }

    stop(){
        
    }


    draw(context) {
        context.fillStyle = 'red';
        // context.fillRect( 
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height 
        //     );

        context.drawImage(this.image, this.position.x, this.position.y-60, 70, 100);
    }

    update(context) {

        

        let {
            x: vX,
            y: vY
        } = this.velocity
        

        // gravity
        this.velocity.y += 2;
        console.log("movement", input.getMovement, this.velocity.x);
       
        
        this.position.x += vX;
        this.position.y += vY;

        if(input.getMovement === -1) {
            this.moveLeft();
        } else if (input.getMovement === 1) {
            this.moveRight();
        }

        //friction
         if(this.position.y < 500){
            this.velocity.x *= 0.90;
            this.velocity.y *= 0.90;
         }else{
            this.velocity.x *= 0.90;
            this.velocity.y *= 0.90;
         }
        
        //stop on ground
        if(this.position.y >= 500){
            this.jumping = false;
            this.position.y = 500;
            this.velocity.y = 0;
        }

        //tp to other side --> loop
        if(this.position.x > 800){
            this.position.x = 0;
        }else if(this.position.x < 0){
            this.position.x = 800;
        }
     
    
        // context.fillRect(
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height 
        //     );

        context.drawImage(this.image, this.position.x, this.position.y-60, 70, 100);

        
        
    }

   


    
}