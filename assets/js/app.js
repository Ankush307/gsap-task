const mm = gsap.matchMedia();
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true
    }
});
const tl2 = gsap.timeline({
    scrollTrigger: {
        scrub: 2,
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
            duration: 5
        }
    )
    tl.fromTo("#left-arrow",
        { x: "-130%" },
        {
            x: "-20%",
            duration: 5,
            ease: "none"
        })
        .to(".bottom-arrow",
            {
                bottom: "40%",
                duration: 5
            })
        .to(".center-content",
            {
                scale: 1,
                opacity: 1,
                duration: 5
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
                duration: 4
            },
        )
        .to(".bottom-arrow",
            {
                bottom: "50%",
                duration: 5
            })
        .to(".center-content-two",
            {
                scale: 1,
                opacity: 1,
                display: "block",
                duration: 4
            },
        )
        .to("#left-arrow",
            {
                x: "5%",
                duration: 1
            },
        )
        .to(".center-content-two",
            {
                scale: 0,
                opacity: 0,
                display: "none",
                duration: 4
            },
        )
        .to(".bottom-arrow",
            {
                bottom: "60%",
                duration: 5
            })
        .to(".center-content-three",
            {
                scale: 1,
                x: "15%",
                opacity: 1,
                display: "block",
                duration: 4
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
            duration: 5
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
                duration: 4
            },
        )
        .to(".center-content-two",
            {
                x: "0",
                opacity: 1,
                display: "block",
                duration: 4
            },
        )
        .to(".center-content-three",
            {
                x: "0",
                opacity: 1,
                display: "block",
                duration: 4
            },
        );
});