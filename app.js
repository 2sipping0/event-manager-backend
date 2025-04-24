require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router(); // Add router definition
const ejs = require('ejs');
const mongoose = require('mongoose');
const Event = require('./models/Events');

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');

// Define routes on the app or router
app.post('/submit-event', (req, res) => {
  const event = new Event(req.body);
  event.save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving event');
    });
});

router.get('/', (req, res) => {
  Event.find()
    .then((result) => {
      res.render('index', { title: 'All events', events: result });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error fetching events');
    });
});

// Register the router with the app
app.use('/', router);

// API route - Note: This will be overridden by the router's '/' route

// create event
app.get('/events/create', (req, res) => {
  res.render('events/create-event', { page: 'create', title: 'Create Event' });
});

// events list
app.get('/events', (req, res) => {
  Event.find()
    .then((events) => {
      res.render('events/event-list', { 
        page: 'events', 
        title: 'All Events', 
        events 
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error fetching events');
    });
});
// About page route
app.get('/about', (req, res) => {
  res.render('about', { page: 'about', title: 'About Us' });
});

// Contact page route
app.get('/contact', (req, res) => {
  res.render('contact', { page: 'contact', title: 'Contact Us' });
});

//post event
app.post('/events', (req, res) => {
  const event = new Event(req.body);
  event.save()
    .then((result) => {
      res.redirect('/events');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving event');
    });
});





// Database connection and server startup
// Use database URL from environment variables
mongoose
  .connect(process.env.dbURL)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server ONLY after successful DB connection
    const server = app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
  });

