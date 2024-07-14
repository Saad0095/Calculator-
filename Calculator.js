let textInp = document.getElementById('textInp');

function sum(a) {
    textInp.value += a;
}

function eq() {
    textInp.value = eval(textInp.value)
}

function clearall() {
    textInp.value = ' '
}

function bckspc() {
    textInp.value = textInp.value.slice(0, -1)
}
