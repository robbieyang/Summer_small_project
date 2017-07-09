function start() {
    calculator.start();
}

var calculator = {
    canvas: document.createElement("canvas"),
    valueButtons: [],
    funcButtons: [],
    operations: ["+", "-", "*", "/"],
    stack: [],
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
        for (var i = 0; i < 9; i++) {
            this.valueButtons.push(new valueButton(50 + i % 3 * 70, 330 - Math.floor(i / 3) * 70, 50, 50, i + 1));
        }
        this.valueButtons.push(new valueButton(50, 400, 50, 50, 0));
        //this.valueButtons.push(new valueButton(120, 400, 50, 50, "."));
        this.funcButtons.push(new valueButton(190, 400, 50, 50, "="));
        for (var i = 1; i <= 4; i++) {
            this.funcButtons.push(new valueButton(260, 120 + i * 70, 50, 50, this.operations[i - 1]));
        }
        this.render();

        //Set EventListener
        this.mouseDown = function (e) {
            calculator.x = e.pageX;
            calculator.y = e.pageY;
            calculator.update();
        }
        this.mouseUp = function (e) {
            calculator.x = false;
            calculator.y = false;
        }
        this.touchStart = function (e) {
            calculator.x = e.pageX;
            calculator.y = e.pageY;
            calculator.update();
        }
        this.touchEnd = function (e) {
            calculator.x = false;
            calculator.y = false;
        } 
        window.addEventListener('mousedown', this.mouseDown);
        window.addEventListener('mouseup',this.mouseUp);
        window.addEventListener('touchstart', this.touchStart);
        window.addEventListener('touchend', this.touchEnd);
    },
    render: function () {
        this.display.render(this.context);
        for (var i = 0; i < this.valueButtons.length; i++) {
            this.valueButtons[i].render(this.context);
        }
        for (var i = 0; i < this.funcButtons.length; i++) {
            this.funcButtons[i].render(this.context);
        }
    },
    update: function () {
        for (var i = 0; i < this.valueButtons.length; i++) {
            if (this.valueButtons[i].clicked()) {
                if (this.display.value.length <= 16)
                    this.display.value += this.valueButtons[i].value;
            }
        }
        for (var i = 1; i < this.funcButtons.length; i++) {
            if (this.funcButtons[i].clicked()) {
                this.stack.push(this.display.value);
                this.stack.push(this.funcButtons[i].value);
                this.display.calculation = this.stack.join(" ");
                this.display.value = 0;
            }
        }
        if (this.funcButtons[0].clicked()) {
            this.stack.push(this.display.value);
            this.display.value = think(this.stack);
            this.display.calculation = this.stack.join(" ") + " =";
            this.stack = [];
        }
        this.clear();
        this.render();
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}