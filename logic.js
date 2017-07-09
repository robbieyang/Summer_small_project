function think(list) {
	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
	new_list = parse(list);
	for (var i = 0; i < new_list.length; i++) {
		console.log(new_list[i]);
	}
	return calculate(new_list);
}

function parse(list) {
	var operator = [];
	var prefix = [];
	for (var i = 0; i < list.length; i++) {
		if (!isNaN(parseInt(list[i]))) {
			prefix.push(list[i]);
		}
		else {
			if (list[i] == "+" || list[i] == "-") {
				while (operator.length > 0 && operator[operator.length - 1] != "(") {
					prefix.push(operator.pop());
				}
			} 
			else if (list[i] == "*" || list[i] == "/") {
				if (operator[operator.length - 1] == "*" || operator[operator.length - 1] == "/") {
					while (operator.length > 0 && operator[operator.length - 1] != "(") {
						prefix.push(operator.pop());
					}
				} 
			}
			else if (list[i] == ")") {
				while (operator.length > 0 && operator[operator.length - 1] != "(") {
					prefix.push(operator.pop());
				}
				operator.pop();
				continue;  // No need to add ")" to the operator array
			}
			operator.push(list[i]);
		}
		console.log(" ");
	}
	while (operator.length > 0) {
		prefix.push(operator.pop());
	}
	return prefix;
}

function calculate(list) {
	var stack = [];
	var num = list.length;
	for (var i = 0; i < num; i++) {
		var item = list.shift();
		switch (item) {
			case "+":
				stack.push(add(stack.pop(), stack.pop()));
				break;
			case "-":
				stack.push(sub(stack.pop(), stack.pop()));
				break;
			case "*":
				stack.push(mul(stack.pop(), stack.pop()));
				break;
			case "/":
				stack.push(div(stack.pop(), stack.pop()));
				break;
			default:
				stack.push(item);
		}
	}
	if (stack.length != 1)
		alert("Error: More than one value in stack");
	return stack[0];
}

function add(a,b) {
	return parseFloat(b) + parseFloat(a);
}

function sub(a,b) {
	return parseFloat(b) - parseFloat(a);
}

function mul(a,b) {
	return parseFloat(b) * parseFloat(a);
}

function div(a,b) {
	return parseFloat(b) / parseFloat(a);
}

