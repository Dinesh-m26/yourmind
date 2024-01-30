var addpopupbtn= document.querySelector(".add-popup-btn")
var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var addbtn=document.getElementById("add-popup")
var cancelpopup=document.getElementById("cancel-popup")

//adding new box

var titleinput=document.getElementById("title-input")
var remainderinput=document.getElementById("reminder-input")
var container=document.querySelector(".boxcontainer")
var paragraph =document.getElementById("paragraph-input")

function addoverlay(){
    popupbox.style.display="block"
    overlay.style.display="block"
}
function cancelbtn(){
    popupbox.style.display="none"
    overlay.style.display="none"
}
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
})
addbtn.addEventListener("click",function(event){
    event.preventDefault();
    if (!titleinput.value || !remainderinput.value || !paragraph.value) {
        alert("Please fill in all three fields");
        return; // Stop execution if fields are not filled
    }
    popupbox.style.display="none"
    overlay.style.display="none"
    var div=document.createElement("div")
    div.setAttribute("class","maincontent")
    div.innerHTML= `<h2 class="mb-0">${titleinput.value}</h2>
    <h3 class="mb-0">${ remainderinput.value}</h3>
    <p>${paragraph.value}</p>
    <button onclick="deletenote(event)" >Delete</button>`
    container.append(div)

    titleinput.value=""
    remainderinput.value=""
    paragraph.value=""
   
})

function deletenote(event){
   event.target.parentElement.remove()
}

