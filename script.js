function startGame() {
  const randomNumber = Math.floor(Math.random() * 100) +1;  // erstellt eine Zahl zwischen 1 und 100. 
  let guess = null;  // Erratene
  let attempts = 0;  // Versuche

  while (guess !== randomNumber) {
    guess = parseInt(promt("Rate eine Zahl zwischen 2 und 100"));
    attempts++;
    
    if (guess > randomNumber) {
      alert ("Zu hoch!");
    } else if (guess > randomNumber){
      alert ("Zu niedrig!");
    } else {
      alert ("Richtig! Su hast ${attempts} Versuche gebraucht.");
    }
  }
}