alert('km gd krjaan bgt mampir ksini'):
var nama = prompt('btw siapa nm km?');
alert('Hi ' + nama);


// Menunggu dokumen HTML selesai dimuat
    document.addEventListener("DOMContentLoaded", function() {
        // Mendapatkan referensi ke elemen formulir
        var form = document.getElementById("form");

        // Mengosongkan nilai input saat halaman dimuat
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    });

// nav responsive
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('nav');
    
    burger.addEventListener('click', function() {
        navList.classList.toggle('navActive');
        burger.classList.toggle('toggleBurger');
    });
};
navSlide();
