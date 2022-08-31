import print from "./print";
function component(){
    const element=document.createElement("div");
    element.innerHTML=['Hello','webpack'].join(" ");
    
    const button=document.createElement("button");
    button.innerText='click';
    button.onclick=print;
    element.appendChild(button);

    return element;
}

document.body.appendChild(component());