$(document).ready(function () {
    const mySkill = [
        { icon: "assets/img/logo/php.png", name: "PHP" },
        { icon: "assets/img/logo/java.png", name: "Java" },
        { icon: "assets/img/logo/git.png", name: "GIT" },
        { icon: "assets/img/logo/javascript.png", name: "Javascript" },
        { icon: "assets/img/logo/laravel.png", name: "laravel" },
        { icon: "assets/img/logo/zend.png", name: "Zend Framework" },
        { icon: "assets/img/logo/bootstrap.png", name: "Bootstrap" }
    ]

    const myPortfolio = [
        {image: "assets/img/project/bayaryuk.png", name: "BayarYuks", desc: "app" },
    ]
    
    for (var i = 0; i < mySkill.length; i++){
        $("#my-skills").append('<div class="col-sm-6 col-md-5 col-lg-4 item" data-aos="zoom-in"><div class="box"><img src="'+mySkill[i].icon+'" alt="" class="mb-3"><h3 class="name">'+mySkill[i].name+'</h3><a href="#" class="learn-more" style="color: #ff512f;">Learn more »</a></div></div>')
    }

    for (var i = 0; i < myPortfolio.length; i++){
        $("#my-portfolio").append('<div class="col-sm-6 item" data-aos="flip-down"><div class="row"><div class="col-md-12 col-lg-5"><a href="#"><img class="img-fluid" src="'+myPortfolio[i].image+'"></a></div><div class="col"><h3 class="name">'+myPortfolio[i].name+'</h3><p class="description">'+myPortfolio[i].desc+'</p></div></div></div>');
    }

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    })

    $(window).scroll(function() {
        if ($(document).scrollTop() > $("section.skills").offset().top) {
            $("nav").addClass("fixed-top nav-dark fadein-down")
        } else {
            $("nav").removeClass("fixed-top nav-dark fadein-down")
        }
    })

})