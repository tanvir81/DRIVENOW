const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Routes
const carsRouter = require('./routes/cars');
const bookingsRouter = require('./routes/bookings');

app.use('/api/cars', carsRouter);
app.use('/api/bookings', bookingsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
