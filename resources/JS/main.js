
document.getElementById("this").addEventListener("mouseover", changeColor);


function changeColor() {
    const colors = ['black', 'red', 'yellow', 'blue', 'green'];
    let randomizedNum = Math.floor(Math.random() * 5);
    let randomColor = colors[randomizedNum];
    document.getElementById("this").style.color = randomColor;
}