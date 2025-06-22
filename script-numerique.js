function updateClock() {
  const horlogeElement = document.getElementById("horlogeNumerique");
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds = milliseconds < 10 ? "0" : milliseconds;

  const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`; // Formate l'heure
  horlogeElement.textContent = timeString; //Met À jour le texte de l'élément HTML
}

updateClock();
setInterval(updateClock, 1000);
