# Event Manager Application

A simple Node.js/Express application for managing events with EJS templating.

## Overview

This event manager application allows users to create and view events. It's built with Node.js, Express, and EJS templates for server-side rendering.

> 🚧 **Note:** A React frontend for this application is planned and will be available in a separate repository.

## Technologies Used

- Node.js
- Express.js
- EJS Templates
- MongoDB (for data storage)
- Mongoose (for database modeling)
- dotenv (for environment variables)

## Features

- Create events with details
- View list of all events
- About and Contact pages
- Simple and intuitive UI

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/2sipping0/event-manager-backend.git
   cd event-manager-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   dbURL=your_mongodb_connection_string
   ```

4. Start the server:
   ```
   node app.js
   ```
   
   For development with auto-restart:
   ```
   npm install -g nodemon
   nodemon app.js
   ```

5. Visit `http://localhost:3000` in your browser

## Routes

### View Routes
- `GET /` - Homepage showing all events
- `GET /events` - View all events
- `GET /events/create` - Event creation form
- `GET /about` - About page
- `GET /contact` - Contact page

### Form Submission Routes
- `POST /events` - Create a new event
- `POST /submit-event` - Alternative route for event submission

## Project Structure

```
event-manager/
├── models/
│   └── Events.js          # Event schema and model
├── views/
│   ├── index.ejs          # Homepage view
│   ├── about.ejs          # About page
│   ├── contact.ejs        # Contact page
    |__ form.ejs           #form
    |__ homepage.ejs       #full page
│   ├── partials/          # Reusable EJS components
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   └── nav.ejs
│   └── events/
│       ├── create-event.ejs  # Event creation form
│       └── event-list.ejs    # Events list page
├── .env                   # Environment variables (not tracked)
├── .gitignore             # Git ignore file
├── app.js                 # Main application file with routes
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Database Schema

The application uses a MongoDB database with a simple Event model. The schema includes fields for event details (exact fields based on your Event model).

## Template Structure

The application uses EJS templating with partials for consistent layout across pages:
- Header, nav and footer partials for consistent navigation and page structure
- Event-specific partials for reusable components in the events section
- Templates receive data like `{ page: 'pageName', title: 'Page Title' }` for dynamic content

## Future Development

- User authentication
- Event editing and deletion functionality
- Search and filtering capabilities
- A React frontend is planned and will be available in a separate repository

## License

MIT