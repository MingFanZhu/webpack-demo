import './style.css';
import webpackImg from './webpack.jpeg';

function component(){
    const element=document.createElement("div");
    element.innerHTML=['Hello','webpack'].join(" ");
    element.classList.add('hello');

    const img=new Image();
    img.src=webpackImg;
    element.appendChild(img);
    
    return element;
}

document.body.appendChild(component());