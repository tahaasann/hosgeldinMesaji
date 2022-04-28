let userName = prompt("Adınızı giriniz");

let info = document.querySelector("#myName");
info.innerHTML = `${userName} `;

var saat = document.querySelector("#myClock");
function showTime(){
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}
setInterval(showTime,1000);