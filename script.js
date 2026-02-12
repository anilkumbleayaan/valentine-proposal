const loveMessage = "From the day you came into my life... everything changed ❤️ And I never want to imagine a future without you.";

/* START PROPOSAL */
function startProposal() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.4;
    music.play();

    document.getElementById("mainBtn").style.display = "none";

    const proposal = document.getElementById("proposal");
    proposal.classList.remove("hidden");
    proposal.classList.add("fade-in");

    typeWriter();
}

/* TYPEWRITER EFFECT */
function typeWriter() {
    let i = 0;
    const speed = 50;
    const loveText = document.getElementById("loveText");
    loveText.innerHTML = "";

    function typing() {
        if (i < loveMessage.length) {
            loveText.innerHTML += loveMessage.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

/* YES BUTTON MAGIC */
function sayYes() {

    document.querySelector(".no-btn").style.display = "none";

    const proposal = document.getElementById("proposal");

    proposal.innerHTML = `
        <div class="final-screen fade-in">
            <h1 class="glow">Kanna ❤️</h1>
            <h2>You are my today and all of my tomorrows.</h2>
            <h2>With you, life feels complete.</h2>
            <h2>I promise to love you endlessly.</h2>
            <h2 class="valentine">Happy Valentine's Day My Love ❤️</h2>
        </div>
    `;

    startFireworks();
    createHearts();
}

/* RUNNING NO BUTTON */
const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", function(e) {
    if (!noBtn) return;

    const rect = noBtn.getBoundingClientRect();
    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 100) {
        const randomX = Math.random() * (window.innerWidth - 120);
        const randomY = Math.random() * (window.innerHeight - 60);
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }
});

/* FIREWORKS */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            drawCircle(x, y);
        }, i * 15);
    }
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 6, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;
    ctx.fill();
}

/* FLOATING HEARTS */
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";
        document.body.appendChild(heart);
    }
}
