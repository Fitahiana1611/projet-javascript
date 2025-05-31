let input_affiche = document.querySelector('.affiche')
let input_result = document.querySelector('.input_result')
let re = document.querySelector('.ress')

let resultat = 0;
let val = 0;

let clear = document.querySelector('.clear');
let del = document.querySelector('.delete');
let pourcent = document.querySelector('.pourcentage');
let division = document.querySelector('.division');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let multiple = document.querySelector('.multiple');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let minus = document.querySelector('.minus');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let addition = document.querySelector('.addition');
let virgule = document.querySelector('.virgule');
let zero = document.querySelector('.zero');
let equal = document.querySelector('.equal')

 zero.addEventListener('click',() =>{
   let zer = 0;
   input_affiche.value =`${input_affiche.value}${zer}`
   val = input_affiche.value
 })
 one.addEventListener('click',() =>{
   let un = 1;
   input_affiche.value = `${input_affiche.value}${un}`
   val = input_affiche.value
 })
 two.addEventListener('click',() =>{
   let deux = 2;
   input_affiche.value =`${input_affiche.value}${deux}`
 })
 
 three.addEventListener('click',() =>{
   let trois = 3;
   val 
   input_affiche.value =`${input_affiche.value}${trois}`
 })
 four.addEventListener('click',() =>{
   let quatre = 4;
   input_affiche.value =`${ input_affiche.value}${quatre}`
 })
 five.addEventListener('click',() =>{
   let cinq = 5;
   input_affiche.value =`${input_affiche.value}${cinq}`
 })
 six.addEventListener('click',() =>{
   let si = 6;
    input_affiche.value = `${input_affiche.value}${si}`
 })
 seven.addEventListener('click',() =>{
   let sept = 7;
   input_affiche.value = `${input_affiche.value}${sept}`
 })
 eight.addEventListener('click',() =>{
   let huit = 8
    input_affiche.value = `${input_affiche.value}${huit}`
 })
 nine.addEventListener('click',() =>{
   let neuf = 9
    input_affiche.value = `${input_affiche.value}${neuf}`
 })
 minus.addEventListener('click',() =>{
    input_affiche.value = `${input_affiche.value}-`
 })
 addition.addEventListener('click',()=>{
    input_affiche.value = `${input_affiche.value}+`
 })
 multiple.addEventListener('click',()=>{
   input_affiche.value = `${input_affiche.value}*`
 })
 virgule.addEventListener('click',()=>{
   input_affiche.value = `${input_affiche.value}.`
 })
pourcent.addEventListener('click',()=>{
   input_affiche.value = `${input_affiche.value}%`
})
division.addEventListener('click',()=>{
   input_affiche.value = `${input_affiche.value}/`
})


clear.addEventListener('click',()=>{
   input_affiche.value=""
})
del.addEventListener('click',()=>{
  let last = `${input_affiche.value}`
  input_affiche.value = last.slice(0,-1)

})


equal.addEventListener('click',()=>{
  let res = eval(input_affiche.value);
  if(res == Infinity){

    re.textContent = "Impossible de faire une division par zero"
    re.style.color = "Red"
    input_affiche.value = '';
  }
  else {
    input_result.value = res;
    input_affiche.value = '';
  }
})
