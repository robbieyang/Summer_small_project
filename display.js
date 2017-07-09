function display(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.value = "0";
    this.calculation = "";
    this.render = function (ctx) {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.font = "24px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "right";
        ctx.textBaseline="middle"; 
        this.value = parseInt(this.value); // Avoid 0 being in the front
        this.value = this.value.toString();
        ctx.fillText(this.value, this.x + this.width - 10, this.y + this.height / 2); 
        ctx.fillText(this.calculation, this.x + this.width - 10, this.y + this.height / 2 - 30); 
    }
}