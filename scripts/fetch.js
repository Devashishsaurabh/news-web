
let searchbox=async(query)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data = await res.json();
        return data.articles;
        
    }catch(err){
        console.log(err)
    }
}
let append=(data,container)=>{
    container.innerHTML=null;
    data.forEach(({title , description, urlToImage})=>{
        let news=[]
        let div=document.createElement("div");
        div.setAttribute("class","news")
        let image=document.createElement("img");
        image.src=urlToImage;
        image.setAttribute("class","img")
        let titles=document.createElement("h3");
        titles.innerHTML=title;
        let disc=document.createElement("p");
        disc.innerHTML= description
        disc.setAttribute("class","disc")
            news.push(title,description,urlToImage);
            div.addEventListener("click",function(){
                localStorage.setItem("news",JSON.stringify(news))
                window.location.href="news.html"
            })
        div.append(image,titles,disc)
        container.append(div);
    });
}
export{searchbox,append}