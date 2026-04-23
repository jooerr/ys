const text = `🎈🎂🎁

!Happy birthday ✨

Happy birthday to my favorite jessyyy,
I’m so lucky that I have you <<
Wishing you the happiest birthday ever 💖

❤️`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";

        document.getElementById("hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}

function start() {
    document.getElementById("photo").classList.add("show");
    document.getElementById("music").play();

    typeWriter();
    createHearts();
}