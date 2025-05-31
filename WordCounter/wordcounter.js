let mot = document.querySelector('.word');
let nbr_mot = document.querySelector('.nbr_mot');
let nbr_car = document.querySelector('.with-space .nbr_carac');
let without_space = document.querySelector('.without-space .nbr_ca');
let char_special = document.querySelector('.char-special .char_special');

mot.addEventListener("input",()=>{
    nbr_mot.textContent = compterMot(mot.value);
    nbr_car.textContent = compterNbrWithSpace(mot.value);
    without_space.textContent = compterNbrWithoutSpace();
    char_special.textContent = compterSpecialChar();

})
function compterMot(par){
    let resu = par.trim().split(/\s+/).filter(Boolean).length
    return resu
}
function compterNbrWithSpace(t){
    let res = t.replace(/[^a-zA-ZéèêàâùçîôëïüÉÈÊÀÂÙÇÎÔËÏÜ\s]/g,'').length;
    return res
}
function compterNbrWithoutSpace(){
    let res = mot.value.match(/[a-zA-ZÀ-ÖØ-öø-Ÿ]/g);
    return res ? res.length:0;
}
function compterSpecialChar(){
    let res = mot.value.match(/[^a-zA-Z0-9\s]/g);
    return res ? res.length:0;
}
