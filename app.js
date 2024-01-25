document.addEventListener('keydown', function(event) {
  if (event.key === 'Q' || event.key === 'q') {
    playSound('Q');
  }
  if (event.key === 'W' || event.key === 'w') {
    playSound('W');
  }
  if (event.key === 'E' || event.key === 'e') {
    playSound('E');
  }
  if (event.key === 'R' || event.key === 'r') {
    playSound('R');
  }
  if (event.key === 'A' || event.key === 'a') {
    playSound('A');
  }
  if (event.key === 'S' || event.key === 's') {
    playSound('S');
  }
  if (event.key === 'D' || event.key === 'd') {
    playSound('D');
  }
  if (event.key === 'F' || event.key === 'f') {
    playSound('F');
  }
});

function playSound(key) {
  // Create an audio element
  var audio = new Audio(`./resources/audio/${key}.wav`);
  // Play the audio
  audio.play();
}