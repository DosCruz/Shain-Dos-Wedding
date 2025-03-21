const targetDate = new Date("June 21, 2025 14:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        document.getElementById("countdown-heading").innerText = "Thank you for being there on our special day!";
        document.getElementById("days").innerText = "";
        document.getElementById("hours").innerText = "";
        document.getElementById("minutes").innerText = "";
        document.getElementById("seconds").innerText = "";
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = `${days}`;
        document.getElementById("hours").innerText = `${hours}`;
        document.getElementById("minutes").innerText = `${minutes}`;
        document.getElementById("seconds").innerText = `${seconds}`;
      }
    }, 1000);

const toggleBtn = document.getElementById('toggleBtn');
const panel = document.querySelector('.panel');
const sectionLinks = document.querySelectorAll('.button');

toggleBtn.addEventListener('click', () => {
  if (panel.classList.contains('open')) {
    panel.classList.remove('open');
    panel.classList.add('closed');
  } else {
    panel.classList.remove('closed');
    panel.classList.add('open');
  }
});

sectionLinks.forEach(link => {
  link.addEventListener('click', () => {
    panel.classList.remove('open');
    panel.classList.add('closed');
  });
});
