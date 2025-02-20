const promoEndDate = new Date("February 25, 2025 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = promoEndDate - now;

    if (timeLeft <= 0) {
        document.getElementById("promo-container").innerHTML = "<h2>Promoção Expirada!</h2>";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
