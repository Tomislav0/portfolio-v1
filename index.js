// ----------------------------------------------------------------

// HEADER HAMBURGER

// ----------------------------------------------------------------

const hamburgerButton = document.getElementsByClassName('mobile-nav-toggle')[0]
const primaryNav = document.getElementById("main-navigation")
hamburgerButton.addEventListener('click', () => {
    const navVisibility = primaryNav.getAttribute('data-visible');

    if (navVisibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        hamburgerButton.setAttribute('aria-expanded', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        hamburgerButton.setAttribute('aria-expanded', 'false');
    }
});

// ----------------------------------------------------------------

// SMOOTH SCROLL

// ----------------------------------------------------------------
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);






document.addEventListener("DOMContentLoaded", (event) => {
    // ----------------------------------------------------------------

    // FORM

    // ----------------------------------------------------------------

    document.querySelectorAll('.js-input').forEach(input => {
        input.addEventListener('keyup', function() {
            if (this.value) {
                this.classList.add('not-empty');
            } else {
                this.classList.remove('not-empty');
            }
        });
    });
    
    // Select the form
    const form = document.querySelector(".contact-form");
  
    // Select individual fields
    const checkboxes = form.querySelectorAll("input[type='checkbox']");
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");
  
    // Log form elements on submit
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission for demo purposes
  
      // Get checked checkbox values
      const selectedServices = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
  
      // Log form values
      console.log("Name:", nameInput.value);
      console.log("Email:", emailInput.value);
      console.log("Message:", messageInput.value);
      console.log("Selected Services:", selectedServices);
      alert("Hej! Ova funkcionalnost još ne radi molim te javi mi se direktno na email.");
    });

    const lazyImages = document.querySelectorAll("img[data-src]");
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });

    // ----------------------------------------------------------------

    // ANIMATIONS

    // ----------------------------------------------------------------

    gsap.registerPlugin(ScrollTrigger)


    const splitTypes = document.querySelectorAll('.falling-text-animation')

    splitTypes.forEach((element, i) => {
        const text = new SplitType(element, { types: 'chars' });

        const animationSpeed = element.dataset.speed;
        console.log(animationSpeed)
        let smth = gsap.from(text.chars, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 20%',
                scrub: false,
                markers: false
            },
            x: '-800',
            y: '-800',
            opacity: 0,
            stagger: 0.05,

        })
    })

    const splitTypesSlide = document.querySelectorAll('.slide-text-animation')

    splitTypesSlide.forEach((element, i) => {
        const text = new SplitType(element, { types: 'chars,words' });
        const scrub = element.dataset.scrub;
        const opacity = element.dataset.opacity;
        let smth = gsap.from(text.chars, {
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'center 20%',
                scrub: scrub,
                markers: false
            },
            opacity: opacity != undefined ? opacity : 0.2,
            stagger: 0.05,

        })
    })

    const splitTypesWords = document.querySelectorAll('.slide-word-animation')

    splitTypesWords.forEach((element, i) => {
        const text = new SplitType(element, { types: 'chars,words' });
        let smth = gsap.from(text.chars, {
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'center center',
                scrub: true,
                markers: false,
            },
            opacity: 0,
            stagger: 0.05,

        })
    })

    gsap.fromTo('.wiggle-scroll-animation',
        {
            duration: 2,
            opacity: 0,
        },
        {
            opacity: 1,
            y: 0,
            scaleY: 1,
            scrollTrigger: {
                trigger: '.wiggle-scroll-animation',
                start: 'top center',
                end: 'bottom bottom',
                scrub: true,
                markers: false
            },
        })

    gsap.from('.upside-animation',
        {
            opacity: 1,
            y: 400,
            scaleY: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.upside-animation',
                start: 'top 200%',
                end: 'center top',
                scrub: false,
                markers: false
            },
        })

    gsap.fromTo('.appearing-animation',
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: '.appearing-animation',
                start: '-200% 200%',
                end: 'top top',
                scrub: false,
                markers: false,
            },
        })

    const opacityChange = document.querySelectorAll('.opacity-animation')

    opacityChange.forEach((element, i) => {

        gsap.fromTo(element,
            {
                duration: 2,
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: element,
                    start: '-200% top',
                    end: 'center center',
                    scrub: true,
                    markers: false,
                },
            })
    });


    const leftslide = document.querySelectorAll('.left-slide-animation')

    leftslide.forEach((element, i) => {

        gsap.from(element,
            {
                x: -1000,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: '-200% bottom',
                    end: 'center center',
                    scrub: true,
                    markers: false
                },
            })
    });


    const rightslide = document.querySelectorAll('.right-slide-animation')

    rightslide.forEach((element, i) => {
        gsap.from(element,
            {
                x: 1000,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: '-200% bottom',
                    end: 'center center',
                    scrub: true,
                    markers: false
                },
            })
    });

});