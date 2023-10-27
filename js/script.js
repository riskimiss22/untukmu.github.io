const body = document.querySelector("body");
inikuis = 0;
ftganti = 0;
flag = 1;
flagg = 1;
fungsi = 0;
ftfungsi = 0;
fungsiAwal = 0;
fungsitimer = 0;
vketikhalo = halo.innerHTML;
halo.innerHTML = "";
vketikhalo2 = halo2.innerHTML;
halo2.innerHTML = "";
pesanwhatsapp = pesanWA.innerHTML;
deffotostiker = fotostiker.src;
audio = new Audio('' + linkmp3.src);
Content.style = "opacity:1;margin-top:16vh;";
const swalst = Swal.mixin({
    timer: 2777,
    allowOutsideClick: false,
    showConfirmButton: false,
    timerProgressBar: true,
    imageHeight: 90,
});
const swals = Swal.mixin({
    allowOutsideClick: false,
    cancelButtonColor: '#FF0040',
    imageWidth: 100,
    imageHeight: 100,
});
const style = document.createElement('style');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    body.appendChild(heart);
}
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 100) {
        heartArr[0].remove()
    }
}, 100);
// async function menuju() {
//     window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;
// }
document.getElementById("kadoIn").onclick = function() {
    if (fungsiAwal == 0) {
        audio.play();
        fungsiAwal = 1;
        kadoIn.style = "transition:all .8s ease;transform:scale(10);opacity:0";
        wallpaper.style = "transform: scale(1.5);";
        ket.style = "display:none";
        setTimeout(mulainama, 700)
    }
}
