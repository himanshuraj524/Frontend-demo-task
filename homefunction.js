// selecting the classes to toggle.
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist"); 

//adding event listenser to the burder menu.
/*This gets activated when the responsive stylesheet will get fired, and it will hide the navigation bar and when user clicks on the hamburder icon it will show the navigation bar.*/
burger.addEventListener("click", ()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-nav-resp');
});