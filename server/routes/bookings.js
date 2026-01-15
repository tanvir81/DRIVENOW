const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const bookingsPath = path.join(__dirname, '..', 'data', 'bookings.json');

// Helper to ensure bookings.json exists and return data
const getBookings = () => {
  try {
    if (!fs.existsSync(bookingsPath)) {
      fs.writeFileSync(bookingsPath, '[]');
      return [];
    }
    const data = fs.readFileSync(bookingsPath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error("Error reading bookings file:", err);
    throw err;
  }
};

const saveBookings = (data) => {
  try {
    fs.writeFileSync(bookingsPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing bookings file:", err);
    throw err;
  }
};

// Get all bookings
router.get('/', (req, res) => {
  try {
    const bookings = getBookings();
    res.json(bookings);
  } catch (error) {
    console.error("GET /api/bookings error:", error);
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
});

// Create booking
router.post('/', (req, res) => {
  try {
    const { carId, userId, date, duration } = req.body;
    if (!carId || !date) return res.status(400).json({ message: 'Missing fields' });
    
    const bookings = getBookings();
    const newBooking = {
      id: Date.now().toString(),
      carId,
      userId: userId || 'guest',
      date,
      duration: Number(duration) || 1,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    saveBookings(bookings);
    
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("POST /api/bookings error:", error);
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

// Cancel/Delete booking
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`ATTEMPTING TO CANCEL BOOKING: ${id}`);
  
  try {
    let bookings = getBookings();
    const initialLength = bookings.length;
    
    // Explicitly check for ID existence
    bookings = bookings.filter(b => b.id !== id);
    
    if (bookings.length === initialLength) {
      console.warn(`CANCEL FAILED: Booking ID ${id} not found in database.`);
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    saveBookings(bookings);
    console.log(`CANCEL SUCCESS: Booking ${id} removed.`);
    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    console.error(`SEVERE CANCEL ERROR for ID ${id}:`, error);
    res.status(500).json({ message: 'Internal server error during cancellation', error: error.message });
  }
});

module.exports = router;
