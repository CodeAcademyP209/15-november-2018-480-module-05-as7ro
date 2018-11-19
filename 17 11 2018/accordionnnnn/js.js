let a = document.querySelectorAll("button");
let i;
for(i = 0; i < a.length; i++){
    a[i].addEventListener("click", function(){
        let b = this.nextElementSibling;
        let active = document.querySelector(".active");
        b.classList.add("active");
        if(active){
            active.classList.remove("active");
        }
    });
}



