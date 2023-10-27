alert('km gd krjaan bgt mampir kesini');
var nama = prompt('btw nm km siapa?');
if(nama == "ajun" || nama == "AJUN"){
  alert('woy ' + nama + ' ganteng');
}
if(nama == "Risma", "risma" || nama == "rsm", "rsma"){
  alert('EH ASLI INI KM ' + nama + '?');
  var tanya = prompt('ay lgsg jadi aja!');
  if(tanya == true){
    alert('YEEEEEEEE');
  }else{
   alert('yah');
  }
}
alert('Hi ' + nama + ' slmt dtg!');

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

