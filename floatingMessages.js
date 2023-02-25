export class FloatingMessage {
    constructor(value, x, y, targetX, TargetY){
        this.value = value;
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.TargetY = TargetY;
        this.markedForDeletion = false;
        this.timer = 0;
    }
    update(){
        this.x += (this.targetX - this.x) * 0.03;
        this.y += (this.TargetY - this.y) * 0.03;
        this.timer++;
        if (this.timer > 100) this.markedForDeletion = true;
    }
    draw(context){
        context.font = '27px Helvetica';
        context.fillStyle = 'white';
        context.fillText(this.value, this.x, this.y);
        context.font = '20 px Helvetica';
        context.fillStyle = 'black';
        context.fillText(this.value, this.x - 2, this.y - 2);
    }
}