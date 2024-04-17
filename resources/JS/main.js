function randomNum (num) {
    let randomizedNum = Math.floor(Math.random() * num);
    return randomizedNum;
}

function randomColor () {
    const colors = ['purple', 'red', 'yellow', 'blue', 'green', 'pink', 'brown'];
    let randomColor = colors[randomNum(colors.length)];
    return randomColor;
}

function changeColor (elem, colorString=randomColor()) {
    elem.style.color = colorString;
}

let idThisElement = document.getElementById("this");
idThisElement.addEventListener("mouseenter", idThisHandler);
idThisElement.addEventListener("mouseleave", idThisHandler);

function idThisHandler () {
    changeColor(idThisElement, randomColor());
}
