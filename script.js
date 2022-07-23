const hamburger = document.querySelector(".ham");  
const topnav = document.querySelector(".topnav");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 topnav.classList.toggle("nav-change")  
});  

setTimeout(function(){
    document.getElementById('welcomeHeader').style.left = '50px'; // new left position is 40% in this example
}, 0); // 2000 = 2 seconds

setTimeout(function(){
    document.getElementById("welcomeTitle").style.left = '50px'; // new left position is 50%
}, 2000); // 2000 = 2 seconds