let text = document.getElementById('text');
        let header = document.querySelector('header');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            text.style.marginTop = value * 0.6 + 'px';
            header.style.top = value * 0.2 + 'px';
            auto.style.marginTop = value * 0.6 + 'px';
        })

var typed = new Typed(".auto-type", {
    strings: ["Organize life", "Track Your Finance", "One Place for Your College Life"],
    typeSpeed: 160, 
    backSpeed: 180,
    loop:true
})

// scroll reveal animation 
animateElement = (element,origin,delay,distance, reset) => {
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: 1000,
        easing: 'ease-out',
        origin: origin,
        reset: reset
    });
  
    sr.reveal(element);
}

animateElement('.paraone', 'left', '300', '500px', true);
animateElement('.paratwo', 'left', '700', '500px', true);
animateElement('.parathree', 'left', '1050', '500px', true);
animateElement('.about-image', 'right', '350', '500px', true);
animateElement('.team-member1', 'left', '350', '500px', true);
animateElement('.team-member2', 'left', '700', '500px', true);
animateElement('.team-member3', 'left', '1050', '500px', true);
animateElement('.team-member4', 'left', '300', '500px', true);
animateElement('.team-member5', 'left', '700', '500px', true);

function redirectToLogin() {
    // Redirect the user to login.html
    window.location.href = 'login.html';
}