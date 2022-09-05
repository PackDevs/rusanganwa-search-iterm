const main=document.querySelector("body")
const category=document.getElementsByClassName("table")
 const iterm=document.getElementsByClassName("table table-dark")[0]
const mnt=document.getElementsByName("thead")
console.log(mnt);


    



const data=async()=>{
    const fet= await (await fetch("https://fakestoreapi.com/products")).json();
    console.log(fet);

    fet.map(item=>{
        const card=`<table class="table table-dark">
    <thead>
      <tr>
        <th>Id</th>
        <th>Image</th>
        <th>category</th>
        <th>Description</th>
        <th>price</th>
        <th>Delete</th>
      </tr>
   
    </thead>
    <tbody>
      <tr>
        <td>${item.id}</td>
        <td><img src=${item.image}></td>
        <td>${item.category}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td>${item.delete}</td>
      </tr>`
      main.innerHTML+=card;

    })
    
}
data()
