let burger = document.querySelector('.burger');
let dropdown = document.querySelector('.open');
let seeIt = false;


burger.addEventListener('click',function(){
    if(seeIt === false){
    dropdown.style.display = "block";
    seeIt = true;
    } else {
    dropdown.style.display = "none";
    seeIt = false;
}
}
)