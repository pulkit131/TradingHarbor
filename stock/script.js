let basicPrice = document.querySelector(".basic-price");
let standardPrice = document.querySelector(".standard-price");
let premiumPrice = document.querySelector(".premium-price");
let slides = document.querySelectorAll('.reviews .flex .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;  
    slides[index].classList.add('active');
}

let monthBtn = document.querySelector('.pricing .toggle-buttons .month-btn');
let yearBtn = document.querySelector('.pricing .toggle-buttons .year-btn');
let monthlyPlan = document.querySelectorAll('.pricing .box-container .box .month');
let yearlyBtn = document.querySelectorAll('.pricing .box-container .box .year');

yearBtn.onclick = () =>{
    monthBtn.classList.remove('active');
    yearBtn.classList.add('active');
    basicPrice.innerHTML = "$99.99 /";
    standardPrice.innerHTML = "$199.99 /";
    premiumPrice.innerHTML ="$299.99/";
    monthlyPlan.forEach(mo => {mo.style.display = 'none'});
    yearlyPlan.forEach(yr => {yr.style.display = 'block'});
}

monthBtn.onclick = () =>{``
    monthBtn.classList.add('active');
    yearBtn.classList.remove('active');
    basicPrice.innerHTML = "$9.99 /";
    standardPrice.innerHTML = "$29.99 /";
    premiumPrice.innerHTML = "$49.99 /";
    monthlyPlan.forEach(mo => {mo.style.display = 'block'});
    yearlyPlan.forEach(yr => {yr.style.display = 'none'});
}
