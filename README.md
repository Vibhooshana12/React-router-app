# React Router App

This project demonstrates the implementation of routing in a React application using react-router-dom. The design and navigation structure are inspired by the GUVI blog page. This app features a navigation menu for different courses like "All," "Full Stack Development," "Data Science," "Cyber Security," and "Career." Each route corresponds to a specific course category and displays static content relevant to that category.

## Demo
Check out the live demo of the project [here](https://vibhooshana-reactrouter-app.netlify.app/)


## Folder Structure

reactrouter-app/

├── node_modules/

├── public/

│   ├── favicon.ico

│   └── index.html

├── src/

│   ├── components/

│   │   ├── NavBar.jsx

│   ├── data/

│   │   ├── Articles.jsx

│   ├── Routerpages/

│   │   ├── AllCourses.jsx

│   │   ├── FullStack.jsx

│   │   ├── DataScience.jsx

│   │   ├── CyberSecurity.jsx

│   │   ├── Career.jsx

│   ├── App.css

│   ├── App.jsx

│   ├── index.css

│   ├── index.js

├── .gitignore

├── package.json

├── README.md


## Project Setup

1. Set up your React application:

```bash

npx create-react-app reactrouter-app
cd reactrouter-app

```
2. Install react-router-dom:

```bash

npm install react-router-dom

```
   
3. Add Components

Create the following components in the src/components directory:

- `NavBar.jsx`: The sticky navigation bar component containing links to different course categories.
  
5. Add Data
   
- `Articles.js`: Contains data details of all the courses
  
4. Add Router Pages
   
- `AllCourses.jsx`:Displays content for all courses.
  
- `Career.jsx`: Displays content for career-related articles.
  
- `CyberSecurity.jsx`:Displays content for Cyber Security courses.
  
- `DataScience.jsx`: Displays content for Data Science courses
  
- `FullStack.jsx`: Displays content for Full Stack Development courses.

5. Set up Routing in App.jsx
   
In the App.jsx file, configure routing using react-router-dom to link the components and pages.
   
6. Run the development server:

To start the development server, use the following command:

```bash

npm start

```
  
7. Open your browser and navigate to http://localhost:3000 to see the application.

## Deployment

To deploy your application:

1. Build the project:

```bash
 npm run build

```

2. Deploy the `build` folder to Netlify.

### Acknowledgements

-React for providing a flexible JavaScript library for building user interfaces.

-React Router for enabling dynamic routing in the application.

-Bootstrap for styling and responsive design.

-Netlify for hosting and deploying the application.
