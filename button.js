function button(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.render = function (ctx) {
        ctx.fillStyle = "grey";
        ctx.fillRect(x, y, width, height);
    }
}