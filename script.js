function startGame() {
  // erstellt eine Zahl zwischen 1 und 100. 
  const randomNumber = Math.floor(Math.random() * 100) + 1;  
  // Erratene
  let guess = null;
  // Versuche
  let attempts = 0; 

  while (guess !== randomNumber) {
    guess = parseInt(prompt("Rate eine Zahl zwischen 2 und 100"));
    attempts++;
    
    if (guess > randomNumber) {
      alert("Zu hoch!");
    } else if (guess < randomNumber) {
      alert("Zu niedrig!");
    } else {
      alert(`Richtig! Du hast ${attempts} Versuche gebraucht.`);  // funkt nur mit Backtricks
    }
  }
}