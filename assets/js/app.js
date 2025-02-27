const mm = gsap.matchMedia();
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#section",
        start: "top top",
        end: "400%",
        scrub: 3,
        pin: true
    }
});
const tl2 = gsap.timeline({
    scrollTrigger: {
        scrub: 3,
        pin: false
    }
});

mm.add("(min-width:1280px)", () => {
    tl.fromTo(".heading",
        {
            opacity: 0,
            y: "-100%"
        },
        {
            y: 0,
            opacity: 1,
        }
    )
    tl.fromTo("#left-arrow",
        { x: "-130%" },
        {
            x: "-20%",
            ease: "none"
        })
        .to(".bottom-arrow",
            {
                bottom: "40%",
            })
        .to(".center-content",
            {
                scale: 1,
                opacity: 1,
            },
        )
        .to("#left-arrow",
            {
                x: "-10%",
                duration: 1
            },
        )
        .to(".center-content",
            {
                scale: 1,
                opacity: 0,
                display: "none",
            },
        )
        .to(".bottom-arrow",
            {
                bottom: "50%",
            })
        .to(".center-content-two",
            {
                scale: 1,
                opacity: 1,
                display: "block",
            },
        )
        .to("#left-arrow",
            {
                x: "5%",
            },
        )
        .to(".center-content-two",
            {
                scale: 0,
                opacity: 0,
                display: "none",
            },
        )
        .to(".bottom-arrow",
            {
                bottom: "60%",
            })
        .to(".center-content-three",
            {
                scale: 1,
                x: "15%",
                opacity: 1,
                display: "block",
            },
        );
});

mm.add("(max-width:1279.98px)", () => {
    tl2.fromTo(".heading",
        {
            opacity: 0,
            y: "-100%"
        },
        {
            y: 0,
            opacity: 1,
        }
    )
    tl2.fromTo(".center-content",
        {
            x: "-100%",
            opacity: 0,
        },
        {
            x: "-100%",
            opacity: 1,
        },
    )
        .to(".center-content",
            {
                x: "0",
                opacity: 1,
            },
        )
        .to(".center-content-two",
            {
                x: "0",
                opacity: 1,
                display: "block",
            },
        )
        .to(".center-content-three",
            {
                x: "0",
                opacity: 1,
                display: "block",
            },
        );
});