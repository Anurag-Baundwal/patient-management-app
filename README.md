# Patient Management App

The Patient Management App is a web application that allows healthcare providers to manage patient information, including personal details, prescriptions, and physician information. It provides features for adding new patients and searching for existing patients.

## Features

- Add new patients with detailed information
- Search for patients by name or phone number
- Display patient details, prescription information, and physician information
- Responsive and user-friendly interface

## Technologies Used

- Frontend:
  - React (create-react-app)
  - Material-UI
  - Axios
- Backend:
  - Node.js
  - MongoDB Atlas

## Installation

Clone the repository:

`git clone https://github.com/your-username/patient-management-app.git`

Navigate to the project directory:

`cd patient-management-app`

Install the dependencies:

`npm install`

Set up the backend server:

- Create a MongoDB Atlas account and set up a new cluster
- Obtain the MongoDB connection string
- Create a `.env` file in the `backend` directory and add the following environment variable:
  `MONGO_URI=your-mongodb-connection-string`

Set up the frontend:

- Create a `.env` file in the root directory and add the following environment variable:
  `  REACT_APP_BACKEND_URL=http://localhost:5000`

## Running the App

Start the backend server:

```
cd backend
node server.js
```

Start the frontend development server:

```
cd ..
npm start
```

Open your browser and visit `http://localhost:3000` to access the app.

## Deployment

The frontend of the app can be deployed on Netlify, while the backend server needs to be hosted separately. To deploy the app:

1. Push the frontend code to a GitHub repository.
2. Connect the repository to Netlify and configure the deployment settings.
3. Deploy the backend server to a hosting platform like Heroku or AWS.
4. Update the frontend code to use the hosted backend server URL.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
