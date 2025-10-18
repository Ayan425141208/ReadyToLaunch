    const express = require('express');
    const path = require('path');
    const app = express();
    const PORT = 3000; // Or any other available port

    // Serve static files from the 'public' directory
    app.use(express.static(path.join(__dirname, 'public')));

    // Route for the root URL
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'grocery.html'));
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });

    app.get('/login', (req,res)=>{
        res.sendFile(path.join(__dirname, 'public', 'login.html'));
    })

    app.get('/home', (req,res)=>{
        res.sendFile(path.join(__dirname, 'public', 'Home.html'));
    })