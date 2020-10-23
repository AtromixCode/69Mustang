const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const logo = document.querySelector('.logo');
    const navUl = document.querySelector('.nav-links');

    logo.style.animation = `navLinkFade 0.5s ease forwards 0.2s`;
    //navUl.style.animation = `navLinkFade 0.5s ease forwards 0.2s`;

    navLinks.forEach((link,index) =>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/5}s`;
    });



    



    
    burger.addEventListener('click', ()=>{
        navLinks.forEach((link,index) =>{
            link.style.animation = '';
        });
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate the links
        navLinks.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5}s`;
            }
       });

       //Burger to X animation
       burger.classList.toggle('trans');
    });



}

navSlide();