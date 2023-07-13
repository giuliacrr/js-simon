"use script"

//Settiamo una data "goal" che sarà quella da raggiungere col nostro cooldown
const cdDate = new Date("jul 14, 2023 09:30:00").getTime();

//Impostiamo ora la funzione di setInterval per creare intervalli di aggiornamento per lo sviluppo della nostra data
const coolDown = setInterval(function () {
  //Creiamo la const della data odierna 
  const today = new Date().getTime();
  //E calcoliamo la differenza
  const diff = cdDate - today;
  //Dobbiamo ora calcolare i giorni, ore, minuti e secondi (e millisecondi);
  //                              ms / sec / min / hr
  const hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((diff % (1000 * 60)) / (1000));

  //Stampiamo ora il risultato
  document.getElementById("cool-down").innerHTML = hr + ":" + min + ":" + sec;

  //Fermare il cd dopo che ha concluso la sua vita
  if (diff < 0) {
    clearInterval(coolDown);
    //Testo sostitutivo al cool-down
    document.getElementById("cool-down").innerHTML = "Time's over"
  }
}, 100)
