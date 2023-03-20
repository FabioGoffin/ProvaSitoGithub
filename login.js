const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Usa body-parser per analizzare i dati POST del form
app.use(bodyParser.urlencoded({ extended: true }));

// Gestisce la richiesta POST dal form
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  // Verifica le credenziali dell'utente dal database
  if (checkCredentials(username, password)) {
    // Credenziali valide, mostra la pagina di benvenuto
    res.send('Benvenuto, ' + username);
  } else {
    // Credenziali non valide, mostra un messaggio di errore
    res.send('Credenziali non valide');
  }
});

// Avvia il server su una porta specifica
app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});

// Funzione per verificare le credenziali dell'utente dal database
function checkCredentials(username, password) {
  // Effettua una query al database per verificare le credenziali dell'utente
  // Restituisce true se le credenziali sono valide, altrimenti false
}
