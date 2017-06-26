function valueButton(x, y, width, height, value) {
    button.call(this, x, y, width, height);
    this.value = value;
}

valueButton.prototype = Object.create(button.prototype);
valueButton.prototype.constructor = valueButton;

valueButton.prototype.clicked = function() {
    if ((this.y + this.height < calculator.y) || (this.y > calculator.y) || (this.x + this.width < calculator.x) || (this.x > calculator.x)) {
        return false;
    }
    return true;
}

valueButton.prototype.render = function (ctx) {
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle"; 
    ctx.fillText(this.value, this.x + this.width / 2, this.y + this.height / 2); 
}