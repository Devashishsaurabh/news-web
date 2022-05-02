// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
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
