const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

// Enable CORS for cross-origin requests
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/user', (req, res) => {
    console.log(req.body); // Log the incoming data

    // Add logic to handle user creation, like saving to the database (if required).
    // Assuming the user is successfully created, send the success response:
    res.status(201).json({ message: "User created successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
