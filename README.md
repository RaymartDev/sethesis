# SE Tech Hive
Welcome to SE Tech Hive, the website that facilitates easy connections between clients in need of top-notch skills and services and freelancers. 
Freelancer Platform is here to make your experience as a freelancer easier, whether you're a client in need of specialized support or a freelancer searching for interesting projects.
To enable meaningful interactions, users can register on SE Tech Hive, create an engaging profile, and publish thorough project descriptions.
relationships between clients and independent contractors. Make use of our platform to collaborate, communicate, and finish projects quickly.
Freelancer Platform uses a variety of computer languages behind the scenes, including as JavaScript, Taliwind, ReactJs, and MongoDB for databases. 
A seamless, safe, and user-friendly experience is enhanced by these languages.

## Technologies
- MongoDB
- Express JS
- React JS 
- Node JS

## Contributors
- Raymart Sarmiento
- Nico Ortega
- Micholo Buenafe

## Installation Instructions
1. Create a .env file inside backend directory and put the following:
    ```
    NODE_ENV=development
    PORT=5000
    MONGO_URI=mongodb+srv://raymart:raymart@cluster0.8wocj97.mongodb.net/setech?retryWrites=true&w=majority
    SECRET_KEY=SETech
    ```
2. Install backend packages
    - cd backend
    - npm i bcryptjs cookie-parser dotenv express express-async-handler jsonwebtoken mongoose multer validator
3. Install frontend packages
    - cd frontend
    - npm i @reduxjs/toolkit react-icons react-redux react-router-dom react-router-hash-link react-toastify
    - npm i -D vite tailwindcss postcss autoprefixer
4. Finally run frontend and backend concurrently
   - cd backend
   - npm start ( Wait for the backend to connect to MongoDB )
   - cd frontend
   - npm run dev
