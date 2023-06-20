const SPEED = 50; /* speed to show each marker (i / speed) */
const DEGREES = 360 / 100; /* base amount to calculate angle of each marker */

const charts = document.querySelectorAll("[data-progress]");
charts.forEach((rating) => {
  const percentage = rating.getAttribute("data-progress");

  for (let i = 0; i < 100; i++) {
    const marker = document.createElement("div");
    marker.classList.add("marker");
    marker.style.transform = `rotate(${DEGREES * i}deg)`;
    marker.style.animationDelay = `${i / SPEED}s`;

    if (i <= percentage) {
      marker.classList.add("completed");
    }
    rating.append(marker);
  }
});
