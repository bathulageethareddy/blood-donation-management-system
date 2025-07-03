const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donor');

app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

app.use('/api', authRoutes);
app.use('/api/donor', donorRoutes);

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
