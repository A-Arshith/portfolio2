function showMessage() {
  const main = document.querySelector('main');
  const message = document.createElement('p');
  message.textContent = "Hello,! Your website is alive 🎉";
  message.style.opacity = 0;
  message.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
  message.style.transform = "scale(0.8)";
  message.style.fontSize = "20px";
  message.style.fontWeight = "bold";
  message.style.color = "#ff6b6b";
  message.style.textAlign = "center";
  message.style.marginTop = "20px";
  main.appendChild(message);
  setTimeout(() => {
    message.style.opacity = 1;
    message.style.transform = "scale(1)";
  }, 10);
  setTimeout(() => {
    message.style.opacity = 0;
    message.style.transform = "scale(0.8)";
    setTimeout(() => {
      main.removeChild(message);
    }, 1000);
  }, 3000);
}

// Function to create and animate stars
function createStars() {
  const body = document.body;
  for (let i = 0; i < 20; i++) {
    const star = document.createElement('span');
    star.innerHTML = '★';
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.fontSize = (10 + Math.random() * 20) + 'px';
    star.style.animationDuration = (4 + Math.random() * 4) + 's';
    star.style.animationDelay = (Math.random() * 6) + 's';
    body.appendChild(star);

    // Remove star after animation completes
    star.addEventListener('animationend', () => {
      star.remove();
    });
  }
}

// Call createStars on page load
window.addEventListener('load', createStars);

// Hide header when scrolled down, show only when at top
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }
});

// Play background music on page load
const music = document.getElementById('bg-music');
const musicToggleBtn = document.getElementById('music-toggle');

window.addEventListener('load', () => {
  music.play().catch(e => console.log('Autoplay blocked by browser policy'));
});

// Initialize button text and class on page load
window.addEventListener('load', () => {
  if (music.paused) {
    musicToggleBtn.textContent = '🔇 Music OFF';
    musicToggleBtn.classList.remove('music-on');
  } else {
    musicToggleBtn.textContent = '🔊 Music ON';
    musicToggleBtn.classList.add('music-on');
  }
});

// Toggle music play/pause on button click
musicToggleBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggleBtn.textContent = '🔊Music ON';
    musicToggleBtn.classList.add('music-on');
  } else {
    music.pause();
    musicToggleBtn.textContent = '🔇Music OFF';
    musicToggleBtn.classList.remove('music-on');
  }
});
