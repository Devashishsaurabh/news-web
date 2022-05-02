// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()

let data=JSON.parse(localStorage.getItem("news"))
let container=document.getElementById("detailed_news")
let append=(data,container)=>{
    container.innerHTML=null;
        let div=document.createElement("div");
        div.setAttribute("class","news")
        let image=document.createElement("img");
        image.src=data[2];
        image.setAttribute("class","img")
        let titles=document.createElement("h3");
        titles.innerHTML=data[0]
        let disc=document.createElement("p");
        disc.innerHTML= data[1];
        div.append(image,titles,disc);
        container.append(div)
}
append(data,container)