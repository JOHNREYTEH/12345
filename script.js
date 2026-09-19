const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const yesImage = document.getElementById("yesImage");

// YES
yesBtn.addEventListener("click", function () {

    message.textContent = "Thank you! 💗";

    yesImage.classList.add("show");

});

// NO
noBtn.addEventListener("mouseover", function () {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});