const express = require('express'); 
const app = express();  

app.get('/', (req, res) => { 
console.log("Ünvan:", req.url); 
console.log("Metod:", req.method); 
console.log("Başlıqlar:", req.headers); 

res.send('Salam! Mənim adım Caviddir.'); 
}); 

app.get('/card', (req, res) => { 
res.send('Bu route kartlar üçün cavabdehdir'); 
}); 
 
app.get('/client', (req, res) => { 
res.send('Bu marşrut müştərilər üçün cavabdehdir'); 
}); 
app.listen(3000, () => { 
console.log('Server http://localhost:3000 ünvanında işləyir'); 
}); 
