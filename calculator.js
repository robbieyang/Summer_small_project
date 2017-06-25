function start() {
    calculator.start();
}

var calculator = {
    canvas: document.createElement("canvas"),
    buttons: [],
    start: function () {
        this.canvas.width = 400;
        this.canvas.height = 500;
        this.canvas.style.border = "1px solid black";
        this.canvas.style.backgroundColor = "aliceblue";
        var body = document.getElementsByTagName("body")[0];
        body.insertBefore(this.canvas, body.firstChild);
        this.context = this.canvas.getContext("2d");

        // Calculator display and buttons
        this.display = new display(50, 50, this.canvas.width - 50 * 2, 100);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                if (i > 0 && j > 2) {
                    break;
                }
                this.buttons.push(new button(50 + i * 70, 200 + j * 70, 50, 50));
            }
        }
        this.render();
    },
    render: function () {
        this.display.render(this.context);
        for (var i = 0; i < this.buttons.length; i++) {
            this.buttons[i].render(this.context);
        }
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}