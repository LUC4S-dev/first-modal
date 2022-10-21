let btnOpen = document.querySelector(".btn_open");
let btnClose = document.querySelector(".btn_close");
let modal = document.querySelector(".modal");
let fade = document.querySelector("#fade");


function showModal(){
    let show = modal.style.visibility = "visible";
    let showFade = fade.style.visibility = "visible"

    return show, showFade;
}

function hideModal(){
    let hide = modal.style.visibility = "hidden";
    let hideFade = fade.style.visibility = "hidden";

    return hide, hideFade;
}

btnOpen.addEventListener('click', function(){
    showModal();
});

btnClose.addEventListener('click', function(){
    hideModal();
});
