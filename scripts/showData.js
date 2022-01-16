async function getData(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }catch(e){
        console.log("err:" , e);
    }
    
}

async function appendData(data , location){
    data.forEach((elem)=>{
        let div= document.createElement("div");
        let p = document.createElement("p");
        let img = document.createElement("img");

        p.innerText = elem.title;
        img.src=elem.image;
        var button = document.createElement("button");
        button.innerText = "add product";
        button.id = "Add-prod";

        button.addEventListener("click" ,function(){
            console.log("here is add product")
            window.location.href = "cart.html";
        })
        
        div.append(img , p , button);
        location.append(div);
        return "Add-prod" ;

    })
}

export {getData , appendData}


