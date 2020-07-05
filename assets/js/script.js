$(document).ready(function () {

    // Content Skill

    const mySkill = [
        {
            icon: "assets/img/logo/php.png",
            name: "PHP"
        }, {
            icon: "assets/img/logo/java.png",
            name: "Java"
        }, {
            icon: "assets/img/logo/git.png",
            name: "GIT"
        }, {
            icon: "assets/img/logo/javascript.png",
            name: "Javascript"
        }, {
            icon: "assets/img/logo/laravel.png",
            name: "laravel"
        }, {
            icon: "assets/img/logo/zendframework.png",
            name: "Zend Framework"
        }, {
            icon: "assets/img/logo/bootstrap.png",
            name: "Bootstrap"
        }
    ]

    for (var i = 0; i < mySkill.length; i++){
        $("#my-skills").append(
            `<div class="col-sm-6 col-md-5 col-lg-4 item" data-aos="zoom-in">
                <div class="box">
                    <img src="`+mySkill[i].icon+`" alt="" class="mb-3 skill-icon">
                    <h3 class="name">`+mySkill[i].name+`</h3>
                    <a href="#" class="learn-more" style="color: #ff512f;">Learn more »</a>
                </div>
            </div>`)
    }

    // Content Portfolio

    const myPortfolio = [
        {
            img: "assets/img/project/bayaryuk/bayaryuk.png",
            desc: 
                `<p class="text-body"><b>BayarYuk!</b> adalah sebuah aplikasi berbasis web untuk pendataan pembayaran spp yang umumnya dilakukan dalam metode tulis manual. Web ini juga dapat digunakan untuk melakukan pendataan siswa dan kelas.</p>
                <div class="row">
                    <div class="col-lg-12 py-3">
                        <img src="assets/img/project/bayaryuk/login.png" alt="" class="w-100">
                    </div>
                    <div class="col-lg-6 py-3">
                        <img src="assets/img/project/bayaryuk/datasiswa.png" alt="" class="w-100">
                    </div>
                    <div class="col-lg-6 py-3">
                        <img src="assets/img/project/bayaryuk/datakelas.png" alt="" class="w-100">
                    </div>
                    <div class="col-lg-6 py-3">
                        <img src="assets/img/project/bayaryuk/datapetugas.png" alt="" class="w-100">
                    </div>
                    <div class="col-lg-6 py-3">
                        <img src="assets/img/project/bayaryuk/dataspp.png" alt="" class="w-100">
                    </div>
                </div>`,
            feature: 
                `<p class="text-subtitle pb-2">Beberapa fitur diantaranya :</p>
                <ol>
                    <li>Data Siswa - CRUD (Admin)</li>
                    <li>Data Kelas - CRUD (Admin)</li>
                    <li>Data Petugas - CRUD (Admin)</li>
                    <li>Data SPP - CRUD (Admin)</li>
                    <li>Tambah Pembayaran (Admin dan Petugas)</li>
                    <li>Lihat Riwayat Pembayaran (Admin, Petugas dan Siswa)</li>
                </ol>`,
            createdby: 
                `<p class="text-subtitle pb-2">Aplikasi ini dibuat menggunakan :</p>
                <ul>
                    <li>Laravel 6.0</li>
                    <li>MYSQL Database</li>
                    <li>Bootstrap 4.0</li>
                </ul> `,
        }, {
            img: "assets/img/project/formom/formom.png",
            desc:
                `<p class="text-body"><b>For Mom's</b> adalah sebuah aplikasi mobile untuk memudahkan orangtua dalam memantau perkembangan buah hati</p>
                <div class="row">
                    <div class="col-lg-3 py-3">
                        <img src="assets/img/project/formom/home.png" alt="" class="w-100">
                    </div>
                    <div class="col-lg-3 py-3">
                        <img src="assets/img/project/formom/care.png" alt="" class="w-100">
                    </div>
                    <div class="col-lg-3 py-3">
                        <img src="assets/img/project/formom/detail.png" alt="" class="w-100">
                    </div>
                    <div class="col-lg-3 py-3">
                        <img src="assets/img/project/formom/memo.png" alt="" class="w-100">
                    </div>
                </div>`,
            feature: 
                `<p class="text-subtitle pb-2">Beberapa fitur diantaranya :</p>
                <ol>
                    <li>Care</li>
                    <li>Memories (Galeri)</li>
                    <li>Jadwal Imunisasi</li>
                </ol>`,
            createdby:
                `<p class="text-subtitle pb-2">Aplikasi ini dibuat menggunakan :</p>
                <ul>
                    <li>Java</li>
                    <li>Firebase Database</li>
                </ul>`
        }
    ]

    for (var i = 0; i < myPortfolio.length; i++){
        $("#my-portfolio").append(
            `<div class="card" >
                <div class="card-body">
                    <div class="w-100 py-3">
                        <img class="w-25" src="`+myPortfolio[i].img+`">
                    </div>
                    <div class="row">
                        <div class="col-lg-12 px-0">
                            <div class="list-group menu-bottom-list" id="list-tab"
                                role="tablist">
                                <a class="list-group-item list-group-item-action active"
                                    id="list-total-pendanaan-list" data-toggle="list"
                                    href="#desc`+i+`" role="tab" aria-controls="home">Deskripsi</a>
                                <a class="list-group-item list-group-item-action"
                                    id="list-profile-list" data-toggle="list"
                                    href="#feature`+i+`" role="tab" aria-controls="profile">Fitur</a>
                                <a class="list-group-item list-group-item-action"
                                    id="list-investor-list" data-toggle="list"
                                    href="#createdby`+i+`" role="tab"
                                    aria-controls="profile">Dibuat Menggunakan</a>
                            </div>
                        </div>
                    </div>
                    <span></span>

                    <div class="tab-content py-4">
                        <div class="tab-pane fade show active" id="desc`+i+`" role="tabpanel"
                            aria-labelledby="desc`+i+`">
                            <div class="row">
                                <div class="col-lg-12">
                                    `+myPortfolio[i].desc+`
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="feature`+i+`" role="tabpanel"
                            aria-labelledby="feature`+i+`">
                            <div class="row">
                                <div class="col-lg-12">
                                    `+myPortfolio[i].feature+`
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="createdby`+i+`" role="tabpanel"
                            aria-labelledby="createdby`+i+`">
                            <div class="row">
                                <div class="col-lg-12">
                                    `+myPortfolio[i].createdby+`
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
    }

    $("a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
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