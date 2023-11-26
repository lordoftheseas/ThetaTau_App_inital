const express = require('express');
const mysql = require('mysql2/promise');
// const bcrypt = require('bcrypt'); // Commented out bcrypt for testing purposes

const app = express();
const port = 3001;

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root_p',  // Replace with your actual MySQL password
  database: 'your_database_name',  // Replace with your actual database name
});

app.use(express.json());

// Example endpoint to retrieve user data
app.get('/users', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Example endpoint to authenticate user
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 1) {
      const user = rows[0];

      // Directly compare the plain text password (for testing purposes)
      if (password === user.password) {
        res.json({ success: true, user });
      } else {
        res.json({ success: false, message: 'Invalid password' });
      }
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ success: false, message: 'Authentication Error' });
  }
});
// Store active meetings and their codes in memory (for demonstration purposes)
const activeMeetings = {};

// Endpoint to start a meeting and generate a code
app.post('/start-meeting', async (req, res) => {
  try {
    const meetingCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit code
    const meetingId = req.body.meetingId; // Add a field for meeting ID (optional)
    activeMeetings[meetingCode] = { meetingId }; // Store the meeting information

    res.json({ success: true, meetingCode });
  } catch (error) {
    console.error('Error starting a meeting:', error);
    res.status(500).json({ success: false, message: 'Error starting a meeting' });
  }
});

// Endpoint to verify a meeting code
app.post('/verify-meeting-code', async (req, res) => {
  try {
    const { meetingCode } = req.body;
    const activeMeeting = activeMeetings[meetingCode];

    if (activeMeeting) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid meeting code' });
    }
  } catch (error) {
    console.error('Error verifying a meeting code:', error);
    res.status(500).json({ success: false, message: 'Error verifying a meeting code' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
