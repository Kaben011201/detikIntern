document.addEventListener("DOMContentLoaded", function () {
  load(1, 85);
  load(2, 75);
  load(3, 90);
  load(4, 85);
  load(5, 75);
});

function load(num, target) {
  const task = document.getElementById(`task-progress${num}`);
  const progressDot = document.getElementById(`progress-dot${num}`);
  const progressBar = document.getElementById(`progress-bar${num}`);
  const progressText = document.getElementById(`progress-text${num}`);

  const incrementTime = 20;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let currentProgress = 0;

        const interval = setInterval(() => {
          if (currentProgress < target) {
            currentProgress++;
            progressBar.style.width = currentProgress + "%";
            progressDot.style.left = currentProgress - 5 + "%";
            progressText.textContent = currentProgress + "%";
          } else {
            clearInterval(interval);
          }
        }, incrementTime);
      } else {
        // Reset progress to 0 when not in view
        progressBar.style.width = "0";
        progressDot.style.left = "0";
        progressText.textContent = "0%";
      }
    });
  });

  observer.observe(task);
}
