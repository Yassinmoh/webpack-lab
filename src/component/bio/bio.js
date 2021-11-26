import './style.scss';
function component() {
    const element = document.createElement("div");
    element.innerHTML = "it is Working fine";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());