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

// Endpoint to create a poll
app.post('/create-poll', async (req, res) => {
  const { question, answers } = req.body;
  try {
    // Insert the poll question
    const [pollResult] = await db.query('INSERT INTO polls (question) VALUES (?)', [question]);
    const pollId = pollResult.insertId;

    // Insert the poll options
    await Promise.all(answers.map(answer => {
      return db.query('INSERT INTO poll_options (poll_id, option_text) VALUES (?, ?)', [pollId, answer]);
    }));

    res.json({ success: true, pollId: pollId });
  } catch (error) {
    console.error('Error creating poll:', error);
    res.status(500).json({ success: false, message: 'Error creating poll' });
  }
});

// Endpoint to record a vote
app.post('/vote', async (req, res) => {
  const { pollOptionId } = req.body;
  try {
    await db.query('INSERT INTO votes (poll_option_id) VALUES (?)', [pollOptionId]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error recording vote:', error);
    res.status(500).json({ success: false, message: 'Error recording vote' });
  }
});

// Endpoint to get poll results
app.get('/poll-results/:pollId', async (req, res) => {
  const { pollId } = req.params;
  try {
    const [options] = await db.query(`
      SELECT po.option_text, COUNT(v.id) as voteCount
      FROM poll_options po
      LEFT JOIN votes v ON po.id = v.poll_option_id
      WHERE po.poll_id = ?
      GROUP BY po.id
    `, [pollId]);

    res.json({ success: true, results: options });
  } catch (error) {
    console.error('Error fetching poll results:', error);
    res.status(500).json({ success: false, message: 'Error fetching poll results' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
