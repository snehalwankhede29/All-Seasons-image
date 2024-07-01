let backgd = document.getElementById("back");
let cardEl = document.getElementById("card");
let img1El = document.getElementById("img1");
let img2El = document.getElementById("img2");
let img3El = document.getElementById("img3");
let img4El = document.getElementById("img4");

function summer(){
    backgd.style.background ="grey";
    img1El.style.height="100%";
    img1El.style.width="100%";
    img1El.style.display = "block";
    img2El.style.display = "none";
    img3El.style.display = "none";
    img4El.style.display = "none";
}

function winter(){
    backgd.style.background ="green";
    backgd.style.background ="grey";
    img2El.style.height="100%";
    img2El.style.width="100%";
    img1El.style.display = "none";
    img2El.style.display = "block";
    img3El.style.display = "none";
    img4El.style.display = "none";
}

function rainy(){
    backgd.style.background ="red";
    backgd.style.background ="grey";
    img3El.style.height="100%";
    img3El.style.width="100%";
    img1El.style.display = "none";
    img2El.style.display = "none";
    img3El.style.display = "block";
    img4El.style.display = "none";
}

function spring(){
    backgd.style.background ="yellow";
    backgd.style.background ="grey";
    img4El.style.height="100%";
    img4El.style.width="100%";
    img1El.style.display = "none";
    img2El.style.display = "none";
    img3El.style.display = "none";
    img4El.style.display = "block";
}