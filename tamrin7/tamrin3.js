let btnArr = [
    document.getElementById("sym"), 
    document.getElementById("ins"),
    document.getElementById("dgi"), 
    document.getElementById("dgi"),
    document.getElementById("stk"), 
    document.getElementById("w3"),
    document.getElementById("map"),
]
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    for(let btn of btnArr){
        document.getElementById("mySidenav").appendChild(btn);
        btn.style.background = "black"
        console.log(btn);
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    for(let btn of btnArr){
        btn.remove();
        document.getElementById("div").appendChild(btn);
        btn.style.background = "rgb(253, 137, 5)"
        console.log(btn);
    }
}