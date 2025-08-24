const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

function myScript() {
    console.log('Script running for larger screens')
}

const mediaQuery = window.matchMedia('(max-width: 1351px)');

if (mediaQuery.matches) {
    myScript();
}

mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        myScript();
    } else {
        console.log('Removed for small screens')
    }
})