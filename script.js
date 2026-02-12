const loveMessage = "From the day you came into my life... everything changed ❤️";

function startProposal() {
    document.getElementById("bgMusic").play();
    document.getElementById("mainBtn").style.display = "none";
    document.getElementById("proposal").classList.remove("hidden");
    typeWriter();
}

function typeWriter() {
    let i = 0;
    const speed = 60;
    function typing() {
        if (i < loveMessage.length) {
            document.getElementById("loveText").innerHTML += loveMessage.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function sayYes() {
    startFireworks();
    alert("YAY ❤️ I Love You Kanna ❤️ Forever!");
}

/* Running NO button */
const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", function(e) {
    if (!noBtn) return;
    const rect = noBtn.getBoundingClientRect();
    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 100) {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }
});

/* Simple Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            drawCircle(x, y);
        }, i * 30);
    }
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
}
