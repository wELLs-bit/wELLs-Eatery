$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    animateOut: 'fadeout',
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Navbar
window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    // Toggles Fixed Class In Navbar On Scroll
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Nav Buttons
let menuBtn = document.querySelector('.menu-btn');
let searhBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');

menuBtn.onclick = function(){
    document.getElementById("nav-items").classList.toggle('active');

    if(document.getElementById("nav-items").classList.contains('active')){
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    }
    else{
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu")
    }
}


searhBtn.onclick = function(){
    document.getElementById("search-form").classList.toggle('active');

    if(document.getElementById("search-form").classList.contains('active')){
        searhBtn.classList.remove("bx-search-alt-2");
        searhBtn.classList.add("bx-x");
    }
    else{
        searhBtn.classList.remove("bx-x");
        searhBtn.classList.add("bx-search-alt-2")
    }
}

cartBtn.onclick = function(){
    document.getElementById("cart").classList.toggle('active');

    if(document.getElementById("cart").classList.contains('active')){
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    }
    else{
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart")
    }
}

darkBtn.onclick = function(){
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");

        
    }
    else{
        darkBtn.classList.remove("bx-sun");
        darkBtn.classList.add("bx-moon")
    }
}


//Menu Section
let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e){
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){

        const target = e.target.getAttribute("data-target");

        menuTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add("active");

        let menuSection = document.querySelector(".menu-section");

        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");

        menuSection.querySelector(target).classList.add("show");
    }
    else{
        return
    }
})


//Event Carousel
$('.events-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots: true,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})



//Review Carousel
$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


//Blog Carousel
$('.blog-carousel').owlCarousel({
    loop:true,
    margin: 5,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})