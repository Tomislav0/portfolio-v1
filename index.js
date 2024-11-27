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

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", (event) => {
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
        const text = new SplitType(element, { types: 'chars' });
        const scrub = element.dataset.scrub;
        const opacity = element.dataset.opacity;
        let smth = gsap.from(text.chars, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 20%',
                scrub: scrub,
                markers: false
            },
            opacity: opacity != undefined ? opacity: 0.2,
            stagger: 0.05,

        })
    })

    const splitTypesWords = document.querySelectorAll('.slide-word-animation')

    splitTypesWords.forEach((element, i) => {
        const text = new SplitType(element, { types: 'words' });
        let smth = gsap.from(text.words, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false
            },
            opacity: 0,
            stagger: 0.05,

        })
    })

    gsap.fromTo('.wiggle-animation',
        {
            scaleY: 0,
            y: -20,
            transformOrigin: 'top',
        },
        {
            y: 0,
            scaleY: 1,
            duration: 2,
            ease: 'elastic.out(1, 0.3)',
            scrollTrigger: {
                trigger: '.rising-animation',
                start: 'top 80%',
                end: 'top 20%',
                scrub: false,
                markers: false
            },
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
                start: 'top 120%',
                end: 'bottom 50%',
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
                end: 'top top',
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
                start: 'top 200%',
                end: 'top top',
                scrub: false,
                markers: false
            },
        })

    gsap.from('.side-slide-animation',
        {
            x: -1000,
            duration: 1,
            scrollTrigger: {
                trigger: '.side-slide-animation',
                start: 'top bottom',
                end: 'center center',
                scrub: true,
                markers: false
            },
        })



    // let tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.author-name',
    //         start: 'top center',
    //         end: 'bottom center',
    //         scrub: false,
    //         markers: true
    //     }
    // })

    // tl.to('.author-name',
    //     {
    //         x:800
    //     }
    // )

});