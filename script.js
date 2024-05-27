let score = 0;

function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    target.style.top = `${Math.random() * 250}px`;
    target.style.left = `${Math.random() * 250}px`;
    target.addEventListener('click', () => {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
        target.remove();
    });
    document.getElementById('game-area').appendChild(target);

    setTimeout(() => {
        if (target.parentElement) {
            target.remove();
        }
    }, 2000);
}

function startGame() {
    setInterval(createTarget, 1000);
}

window.onload = startGame;
