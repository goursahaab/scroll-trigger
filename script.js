gsap.from(".p1_box",{
    scale : 0,
    rotate : 360,
    duration : 2,
    // scrollTrigger : {
    //     trigger :".p1_box",
    //     scroller : "body",
    //     markers : true,
    //     start : "top 40%",
    //     end : "top 60%",
    //     scrub : true
    // }
    // repeat : -1
    
})
gsap.from(".p2_box",{
    scale : 0,
    rotate : 360,
    duration : 2,
    scrollTrigger : {
        trigger :".p2_box",
        scroller : "body",
        // markers : true,
        end : "top 60%",
        scrub : true
    }
    
    
})
gsap.from(".p3_box",{
    scale : 0,
    rotate : 360,
    duration : 2,
    scrollTrigger : {
        trigger :".p3_box",
        scroller : "body",
        // markers : true,
        end : "top 50%",
        scrub : true
    }
})