
let find = document.querySelector('.find');


find.addEventListener('click',()=>{
    let ins = document.querySelector('.container_value')
    let date = document.getElementById('date').value;
    let da = new Date(date)
    let jour_index=da.getDay()
    let jours = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let nomJour = jours[jour_index]
    ins.textContent=nomJour
}) 

