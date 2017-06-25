function display(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.render = function (ctx) {
        ctx.strokeRect(x, y, width, height);
        ctx.font = "24px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "right";
        ctx.textBaseline="middle"; 
        ctx.fillText("Display here", this.x + this.width - 10, this.y + this.height/2); 
    }
}