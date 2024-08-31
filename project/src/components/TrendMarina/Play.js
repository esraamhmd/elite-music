// src/script.js

// Function to toggle play/pause for the specific song
export function toggleAudio(audioId, button) {
    var audio = document.getElementById(audioId);

    // Pause all other audios
    var audios = document.querySelectorAll('audio');
    audios.forEach(function(otherAudio) {
        if (otherAudio !== audio) {
            otherAudio.pause();
            otherAudio.currentTime = 0;
            var otherButton = otherAudio.previousElementSibling;
            if (otherButton) {
                otherButton.classList.remove("fa-pause");
                otherButton.classList.add("fa-play");
            }
        }
    });

    if (audio.paused) {
        audio.play();
        button.classList.remove("fa-play");
        button.classList.add("fa-pause");
    } else {
        audio.pause();
        button.classList.remove("fa-pause");
        button.classList.add("fa-play");
    }
}


export function toggleSidebar() {
 
  const sidebar = document.querySelector('.trend-sidebar');
  

  if (!sidebar) return;
  
 
  sidebar.classList.toggle('show');
}

