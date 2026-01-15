const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const carsPath = path.join(__dirname, '..', 'data', 'cars.json');
const getCars = () => JSON.parse(fs.readFileSync(carsPath, 'utf8'));

// Get all cars
router.get('/', (req, res) => {
  try {
    const cars = getCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cars' });
  }
});

// Get single car
router.get('/:id', (req, res) => {
  try {
    const cars = getCars();
    const car = cars.find(c => c.id === req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching car' });
  }
});

module.exports = router;
