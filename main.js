let form = document.querySelector("form")
let input = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 =document.querySelector("#input3")
let input4 = document.querySelector("#input4")
let input5 = document.querySelector("#input5")
let input6 = document.querySelector("#input6")
let cards = document.querySelector(".cards")
let right = document.querySelector(".right")
let deleteallbtn =document.querySelector("#deleteall")
// console.log(deleteallbtn);


let card = (e) => {
    e.preventDefault()
    let newli = document.createElement("li")
    let newli2 = document.createElement("li")
    let newli3 =document.createElement("li")
    let newli4 = document.createElement("li")
    let newli5 = document.createElement("li")
    let newli6 =document.createElement("li")
    let card = document.createElement("div")
    let del =document.createElement("button")
    let whtsup =document.createElement("div")
    let calling =document.createElement("div")


    card.className ="cards"
    newli.className = "list"
    newli.textContent = input.value
    newli2.className = "list"
    newli2.textContent= input2.value
    newli3.className = "list"
    newli3.textContent= input3.value
    newli4.className = "list"
    newli4.textContent = input4.value
    newli5.className = "list"
    newli5.textContent = input5.value
    newli6.className = "list"
    newli6.textContent = input6.value
    del.className ="delete"
    del.innerText="X"
    whtsup.className="whtsup"
    whtsup.innerHTML= `
    <a href="https://web.whatsapp.com/send?phone=8989551553" target="_blank">
    <i class="fa-brands fa-whatsapp"></i>
    </a>`
    
    calling.className="calling"

    calling.innerHTML=`
    <a href="tel:9009742061">
    <i class="fa-solid fa-phone"></i></a>`

    
    card.appendChild(newli)
    card.appendChild(newli2)
    card.appendChild(newli3)
    card.appendChild(newli4)
    card.appendChild(newli5)
    card.appendChild(newli6)
    right.appendChild(card)
    card.appendChild(del)
    card.appendChild(whtsup)
    card.appendChild(calling)
    form.reset()
   
}
 const remove = (e)=>{
    if(e.target.className.includes("delete")){
        e.target.parentElement.remove()
    }
    // else if(e.target.id.includes("deleteall")){
    //     card.remove()
    //     e.target.parentElement.remove()
    // }
    console.log(e);
}
console.log(deleteallbtn);


// const removeall = (e)=>{
//     e.preventDefault();
//     if(e.target.className.includes("right")){
    //         child.innerHTML="";
    //     }
    // }
    // deleteallbtn.addEventListener("click", removeall)
    
    // const deleteall =(e)=>{
        //     if(e.target.){}
        // }
        deleteallbtn.addEventListener("click", () => {
            const allCards = document.querySelectorAll(".cards");
            allCards.forEach((card) => {
                card.remove();
            });
        });
        
        
        right.addEventListener("click" , remove)
        
        form.addEventListener("submit" , card)


        
       