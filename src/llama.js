export default class Character {

    constructor(gameHeight, gameWidth) {
        this.image = document.getElementById("img_llama");
        this.width = 16;
        this.height = 25;

        this.gameWidth = this.gameWidth;
        this.gameHeight = this.gameHeight;

        this.position = {
            x: 50,
            y: 120
        };

    }

    

    jump() {
        
    }

    moveLeft() {
       
    }
    moveRight() {
        
    }

    duck() {
       
    }


    draw(context) {
        // context.drawImage(
        //     this.image,
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height
            
        
        // );
        context.fillStyle = 'black';
        context.fillRect( this.position.x, this.position.y, this.width, this.height );
    }

    update(context) {
        context.fillRect( this.position.x, this.position.y, this.width, this.height );
        // context.drawImage(
        //     this.image,
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height
            
        
        // );
    }

   


    
}