const express = require('express');
const app = express();
const port = 3000; // You can change this to the port you want to use

process.on('uncaughtException', error => {
    console.error('Uncaught Exception:', error);
    process.exit(1); // Exit the process with an error code
});

// Handle SIGINT (Ctrl+C) to gracefully shut down the server
process.on('SIGINT', () => {
    console.log('Server is shutting down...');

    // Close the server and exit the process
    server.close(() => {
        process.exit(0);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Define a simple route that logs when it's hit
app.get('/', (req, res) => {
    console.log('Server received a request!');
    res.send('Hello, World!'); // You can send any response you want
});
