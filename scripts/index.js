// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()

// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let search= (e) =>{
    if(e.key==="Enter"){
        let query=document.getElementById("search_input").value;
        searchbox(query).then((data)=>{
            console.log(data)
            append(data, document.querySelector("#results"))
        })
    }
}
import {searchbox,append} from "./fetch.js";
document.getElementById("search_input").addEventListener("keydown",search);
let countries = document.getElementById("sidebar").children
async function csearch(){
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`);
        let data = await res.json();
        console.log(data)
        append(data.articles, document.querySelector("#results"))
    }catch(err){
        console.log(err)
    }
}
for(let el of countries){
    el.addEventListener('click',csearch)
}