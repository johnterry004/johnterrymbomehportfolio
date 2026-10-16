
$(document).ready(function () {
    // Sticky navbar and scroll-to-top button
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        if ($(this).scrollTop() > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // Scroll back to the top
    $(".scroll-up-btn").on("click", function (event) {
        event.preventDefault();

        $("html, body").animate(
            { scrollTop: 0 },
            600
        );
    });

    // Smooth scrolling for navigation links
    $(".navbar .menu li a").on("click", function () {
        $("html").css("scrollBehavior", "smooth");

        // Close the mobile menu after selecting a link
        $(".navbar .menu").removeClass("active");
        $(".menu-btn i").removeClass("active");
        $(".menu-btn").attr("aria-expanded", "false");
    });

    // Mobile navigation menu
    $(".menu-btn").on("click", function () {
        var menu = $(".navbar .menu");
        var isOpen = menu.hasClass("active");

        menu.toggleClass("active");
        $(".menu-btn i").toggleClass("active");
        $(this).attr("aria-expanded", String(!isOpen));
    });

    // Typing animation
    var jobTitles = [
        "Software Developer",
        "Entrepreneur",
        "Networking Specialist",
        "Digital Marketer",
        "Graphic Designer"
    ];

    if (typeof Typed !== "undefined") {
        if (document.querySelector(".typing")) {
            new Typed(".typing", {
                strings: jobTitles,
                typeSpeed: 70,
                backSpeed: 40,
                backDelay: 1500,
                loop: true,
                smartBackspace: true
            });
        }

        if (document.querySelector(".typing-2")) {
            new Typed(".typing-2", {
                strings: jobTitles,
                typeSpeed: 70,
                backSpeed: 40,
                backDelay: 1500,
                loop: true,
                smartBackspace: true
            });
        }
    }

    // Team carousel
    if ($.fn.owlCarousel && $(".carousel").length) {
        $(".carousel").each(function () {
            var carousel = $(this);

            // Prevent initializing the same carousel twice
            if (carousel.hasClass("owl-loaded")) {
                return;
            }

            carousel.owlCarousel({
                margin: 20,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: false
                    }
                }
            });
        });
    }

    // Accessibility: close the mobile menu with Escape
    $(document).on("keydown", function (event) {
        if (event.key === "Escape") {
            $(".navbar .menu").removeClass("active");
            $(".menu-btn i").removeClass("active");
            $(".menu-btn").attr("aria-expanded", "false");
        }
    });
});

// FAQ: show or hide an answer
function toggleAnswer(id) {
    var answer = document.getElementById(id);

    if (!answer) {
        return;
    }

    var isHidden = window.getComputedStyle(answer).display === "none";

    answer.style.display = isHidden ? "block" : "none";
}
