function loadActive(id) {
    var item = document.querySelectorAll(".navItem");

    item.forEach(function(item){
        item.classList.remove("active");
});
    document.getElementById(id).classList.toggle("active");
}

function theme(){
    document.getElementById("theme").classList.toggle("night");
}