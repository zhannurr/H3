function changeColor() {
    let colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F1'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

