const mysql = require('mysql');
const express = require('express');
const app = express();

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'test'
});


db.connect((err) => {
  if (err) {
    console.error('🔴🔴🔴Error connecting to MySQL:', err,'🔴🔴🔴');
    return;
  }
  console.log('🟢🟢🟢 Connected to MySQL database 🟢🟢🟢');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🟢🟢🟢 Server is running on http://localhost:${PORT} 🟢🟢🟢`);
});
