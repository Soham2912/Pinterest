var arr =[
   {name:"Petals of roses",image:"https://images.unsplash.com/photo-1515960655404-d10f8567cd36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0YWxzJTIwb2YlMjByb3NlfGVufDB8fDB8fHww"},
   {name:"Animals of Town",image:"https://images.unsplash.com/photo-1611473292683-85ac7a3688cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFscyUyMG9mJTIwdG93bnxlbnwwfHwwfHx8MA%3D%3D"},
   {name:"Crowd of City",image:"https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3Jvd2QlMjBvZiUyMGNpdHl8ZW58MHx8MHx8fDA%3D"},
   {name:"Revolution",image:"https://images.unsplash.com/photo-1528194663420-bfa489364cb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV2b2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D"},
   {name:"The Great Wall",image:"https://images.unsplash.com/photo-1583405584623-58f4b7d1380f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JlYXQlMjB3YWxsfGVufDB8fDB8fHww"},
   {name:"Husky Dog",image:"https://images.unsplash.com/photo-1590419690008-905895e8fe0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SHVza3l8ZW58MHx8MHx8fDA%3D"},
   {name: "Inception",image:"https://images.unsplash.com/photo-1607100921698-e7de7c568742?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5jZXB0aW9ufGVufDB8fDB8fHww"},
   //{name:"Communism",image:"https://images.unsplash.com/photo-1634662688202-a5e0f7f7a919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tbXVuaXN0fGVufDB8fDB8fHww"},
   {name:"Dystopian Building",image:"https://images.unsplash.com/photo-1582624301042-7adc1f5c8332?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Himalayas",image:"https://images.unsplash.com/photo-1584395631446-e41b0fc3f68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWFzfGVufDB8fDB8fHww"},
    {name:"Desert",image:"https://images.unsplash.com/photo-1616272963049-da2d8efc0c57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzZXJ0fGVufDB8fDB8fHww"},
    {name:"Rainforest",image:"https://images.unsplash.com/photo-1534531409543-069f6204c5b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"},

]

let filarr;

const showCards = () =>{
    var card = "";
   
    arr.forEach((item)=>{
        card+= `
        <div class="box">
            <img src="${item.image}" alt="${item.name}">
           
        </div>
        `
    })

    document.querySelector(".container")
    .innerHTML= card;

}


const search = () =>{

     var search = document.querySelector("#searchinput");
 search.addEventListener("focus",()=>{
        document.querySelector(".overlay").style.display = "block";
   })

  search.addEventListener("blur",()=>{
    document.querySelector(".overlay").style.display = "none";
})

  search.addEventListener("input", () =>{
     filarr = arr.filter(obj=> obj.name.toLowerCase().startsWith(search.value));
    var curr = "";
    filarr.forEach((obj)=>{
        curr+= `<div class="res flex px-8 py-3">
        <i class="ri-search-line font-semibold mr-5"></i>
        <h3 class="font-semibold">${obj.name}</h3>
        </div>`
    })
    document.querySelector(".searchdata").style.display="block";
    document.querySelector(".searchdata").innerHTML = curr;

})
   
}


 
     function searchedCards(){
     document.querySelector(".searchdata").style.display="none";
   var card = "";
   
     filarr.forEach((item)=>{
        card+= `
         <div class="box">
             <img src="${item.image}" alt="${item.name}">
           
         </div>
      `
      document.querySelector(".container")
      .innerHTML= card;
   })

 }

showCards();

search();

document.querySelector(".searchdata").addEventListener("click", searchedCards);
