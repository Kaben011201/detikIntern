document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-circle-bar");
  const progressText = document.getElementById("progress-text-circle");

  const targetProgress = 45; // Target persentase
  const incrementTime = 30; // Waktu dalam milidetik untuk setiap peningkatan persentase
  const circumference = 2 * Math.PI * 23; // Keliling lingkaran (2 * π * r)

  progressBar.style.strokeDasharray = circumference;
  progressBar.style.strokeDashoffset = circumference;

  let progressReached = false; // Tambahkan flag untuk melacak apakah progress sudah mencapai target

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Hanya jalankan animasi jika progress belum mencapai target
        if (!progressReached) {
          let currentProgress = 0;

          const interval = setInterval(() => {
            if (currentProgress < targetProgress) {
              currentProgress++;
              progressText.textContent = currentProgress + "%";
              progressBar.style.strokeDashoffset =
                circumference - (currentProgress / 100) * circumference;
            } else {
              clearInterval(interval); // Hentikan interval ketika target tercapai
              progressReached = true; // Tandai bahwa target telah tercapai
            }
          }, incrementTime);
        }
      } else {
        // Reset progress ketika elemen tidak terlihat
        progressText.textContent = "0";
        progressBar.style.strokeDashoffset = circumference;
        progressReached = false; // Reset flag agar animasi bisa dimulai lagi
      }
    });
  });

  observer.observe(progressBar);
});
