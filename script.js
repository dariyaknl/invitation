document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const photoModal = document.getElementById('photoModal');
    const closeModal = document.getElementById('closeModal');

    // Create emoji rain immediately
    createEmojiRain();

    // Click to open the invitation
    envelopeWrapper.addEventListener('click', (e) => {
        // Prevent clicking nested elements like the seal separately
        e.stopPropagation();

        // 1. Launch pastel confetti burst
        confetti({
            particleCount: 100,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#e2bada', '#fce4ec', '#c8b6ff', '#fdfbf7', '#eacb8a']
        });

        // 2. Open the photo modal GUARANTEED FULLY
        // A tiny delay makes the confetti and animation smoother
        setTimeout(() => {
            photoModal.classList.add('show');
        }, 300);
    });

    // Closing logic
    closeModal.addEventListener('click', closeInvitation);
    photoModal.addEventListener('click', (e) => {
        // Close only if the dark background is clicked, not the image
        if (e.target === photoModal) {
            closeInvitation();
        }
    });

    // Support ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && photoModal.classList.contains('show')) {
            closeInvitation();
        }
    });

    function closeInvitation() {
        photoModal.classList.remove('show');
    }
});

// Function to create falling emoji rain
function createEmojiRain() {
    const rainContainer = document.getElementById('emojiRain');
    // Aesthetic, birthday-themed emojis
    const emojis = ['🥳', '🎂', '✨', '🎈', '💖', '👑', '🎉', '🕯️', '🥂'];
    const count = 25; // Number of simultaneous elements

    for (let i = 0; i < count; i++) {
        const emojiEl = document.createElement('div');
        emojiEl.classList.add('falling-emoji');
        emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random properties for natural look
        emojiEl.style.left = `${Math.random() * 100}%`;
        emojiEl.style.animationDuration = `${4 + Math.random() * 6}s`; // 4 to 10 seconds
        emojiEl.style.animationDelay = `${Math.random() * 5}s`;
        emojiEl.style.fontSize = `${1.2 + Math.random() * 1}rem`; // Random size

        rainContainer.appendChild(emojiEl);
    }
}