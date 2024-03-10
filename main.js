let menu = document.querySelector( '#menu-icon' );
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle( "bx-x");
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr=ScrollReveal({
    distance:'60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.text',{delay:100, origin:'top'})
sr.reveal('.form-conatainer form',{delay:600, origin:'left'})
sr.reveal('.heading',{delay:100, origin:'top'})
sr.reveal('.ride-container .box',{delay:400, origin:'top'})
sr.reveal('.services-container .box',{delay:100, origin:'top'})
sr.reveal('.about-conatainer .box',{delay:100, origin:'top'})
sr.reveal('.reviews-conatainer .box',{delay:100, origin:'top'})
sr.reveal('.newsletter .box',{delay:400, origin:'bottom'})
sr.reveal('.row.subtitle', {delay:100, origin:'top'})



document.getElementById("city").addEventListener("input", function() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("city");
    filter = input.value.toUpperCase();
    dropdownContent = document.getElementById("dropdownContent");
    a = dropdownContent.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
    dropdownContent.classList.add("show");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.autocomplete')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.cards');
});


document.addEventListener("DOMContentLoaded", function() {
    var accordionTitles = document.querySelectorAll('.accordion-section-title');

    accordionTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var content = this.nextElementSibling;
            content.classList.toggle('show');
        });
    });
});


let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        header.classList.add('hidden');
    } else {
        // Scroll up
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll;
});
