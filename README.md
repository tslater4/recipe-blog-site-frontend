# Recipe Blog Site
## A full-stack web application for sharing recipes, with user functionality and authentication.

### Deployed App: https://endearing-raindrop-a4fc90.netlify.app/

### Planning Materials: https://trello.com/b/SiB1LYmN/module-3-planning

### Backend Repository: https://github.com/tslater4/recipe-blog-site-backend

---

## Project Overview

A modern, responsive web application that allows users to create accounts, share their favorite recipes, and engage with other's posts through comments. Built with a focus on user experience and clean design.

### Key Features

- **User Authentication**: Secure JWT-based registration and login system
- **Recipe Management**: Full CRUD operations for recipes with rich text content
- **Community Interaction**: Comment system for recipe discussions and feedback
- **Responsive Design**: Mobile-first approach with clean, dark-mode interface
- **User Profiles**: Browse other users and their contributed recipes
- **Real-time Updates**: Dynamic content loading without page refreshes

---

## Technologies Used

### Frontend
- **React** - Component-based UI library with hooks and context
- **React Router** - Client-side routing for single-page application
- **CSS3** - Custom styling with flexbox/grid layouts and animations
- **Vite** - Modern build tool for fast development

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for API development
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - ODM for MongoDB with schema validation
- **JWT** - JSON Web Tokens for secure authentication
- **bcrypt** - Password hashing for security

### Development Tools
- **Postman** - API testing and documentation
- **MongoDB Atlas** - Cloud database hosting
- **Netlify** - Frontend deployment platform
- **GitHub** - Version control and collaboration

---

## Architecture & Design Patterns

- **RESTful API**: Clean, semantic HTTP endpoints following REST conventions
- **MVC Pattern**: Separation of concerns with models, views, and controllers
- **Component Architecture**: Reusable React components with props and state management
- **Context API**: Global state management for user authentication
- **Responsive Design**: Mobile-first CSS with media queries

---

## User Experience

### Authentication Flow
1. **Registration**: Secure account creation with password encryption
2. **Login**: JWT token-based session management
3. **Persistent Sessions**: Automatic login on return visits

### Recipe Management
1. **Create**: Rich form interface for recipe submission
2. **Read**: Organized recipe display with author attribution
3. **Update**: Edit functionality for recipe owners
4. **Delete**: Secure deletion with ownership verification

### Community Features
1. **Browse Users**: Discover other community members
2. **Comment System**: Engage in recipe discussions
3. **Recipe Discovery**: Explore recipes from all users

---

## Security Features

- Password hashing with bcrypt (12 salt rounds)
- JWT token authentication for protected routes
- User authorization for recipe modification
- Input validation and sanitization
- CORS configuration for secure API access

---

## Design Philosophy

- **Dark Mode Interface**: Professional aesthetics optimized for readability
- **Minimalist Design**: Clean layouts focusing on content accessibility
- **Consistent Styling**: Unified color scheme and typography system
- **Intuitive Navigation**: Clear user flows and logical information architecture

---

## Future Enhancements

### Planned Features
- **Recipe Ratings**: 5-star rating system with aggregate scores
- **Image Upload**: Photo support for recipes with cloud storage
- **Advanced Search**: Filter recipes by ingredients, cuisine, or difficulty
- **Social Features**: Follow users and personalized recipe feeds
- **Recipe Collections**: Bookmark and organize favorite recipes
- **Nutritional Information**: Calorie and nutrient tracking

### Technical Improvements
- **Performance Optimization**: Lazy loading and code splitting
- **Testing Suite**: Unit and integration tests with Jest/React Testing Library
- **Progressive Web App**: Offline functionality and mobile app experience
- **Real-time Features**: Live comments and notifications with WebSockets

---

## Key Learning Outcomes

- **Full-Stack Development**: End-to-end application development from database to deployment
- **API Design**: RESTful service architecture and comprehensive documentation
- **Authentication Systems**: Secure user management following industry standards
- **Modern React**: Advanced hooks, context patterns, and functional components
- **Database Design**: NoSQL schema design and relationship modeling
- **Deployment Pipeline**: Cloud hosting and continuous integration practices

---

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Start development server: `npm run dev`
5. Access application at `http://localhost:5173`

---

## API Documentation

### Authentication Endpoints
- `POST /auth/signup` - User registration
- `POST /auth/signin` - User login

### Recipe Endpoints
- `GET /recipes` - Fetch all recipes
- `POST /recipes` - Create new recipe
- `GET /recipes/:id` - Get specific recipe
- `PUT /recipes/:id` - Update recipe
- `DELETE /recipes/:id` - Delete recipe

### Comment Endpoints
- `POST /recipes/:id/comments` - Add comment to recipe
- `GET /comments` - Fetch all comments

---

### Attributions
React, React Router, Express, MongoDB, JWT, bcrypt, Vite, General Assembly curriculum and guidance.
