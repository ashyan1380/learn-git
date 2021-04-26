let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hour = document.getElementById("hour");

function timer() {
    const now = new Date();
    const seconds = now.getSeconds();
    sec.innerHTML = seconds;

    const mins = now.getMinutes();
    min.innerHTML = mins;

    const hours = now.getHours();
    hour.innerHTML = hours;
}
setInterval(timer, 1000);