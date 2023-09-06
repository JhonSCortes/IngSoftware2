Grupo 1:

Didier Manuel Castro,
Jhon Sebastian Cortes,
Juan Diego Cuevas,
Nicolas Escandon,
Mateo Hanaoka.

# Login Screen Requirements

## 1. Introduction
This document defines the requirements for the login screen of the application. It will be developed using the **MERN Stack (MongoDB, Express.js, React, and Node.js)** Framework.

## 2. Functional Requirements

### 2.1. User Interface

#### Username/Email Field:
- A field where users can input their registered email or username.
- Should be clearly labeled.

#### Password Field:
- A field where users can input their password.
- Should be masked to prevent unauthorized viewing.
- Should have a placeholder indicating "Password".

#### Login Button:
- A button users can press after inputting their credentials to initiate the login process.

#### Forgot Password Link:
- A link users can click on if they have forgotten their password.
- Leads to a password recovery process.

#### Sign-Up Link:
- A link for new users to create an account if they don’t have one.

## 3. Non-Functional Requirements

### 3.1. Usability

#### Intuitive Design:
- The login screen should be easy to understand and use, even for first-time users.

#### Responsive Design:
- The login screen should render appropriately on devices of different sizes and resolutions.

### 3.2. Performance

#### Fast Authentication:
- The login process should be quick, with minimal waiting time for the user.

#### Optimized API Calls:
- Ensure that API calls are optimized to minimize data usage and enhance speed.

### 3.4. Accessibility

#### Contrast:
- Text and background colors should have high contrast for visibility.

#### Keyboard Navigation:
- Users should be able to navigate the login screen using a keyboard.

### 3.5. Scalability

#### API Scalability:
- Ensure the app can handle a large number of simultaneous login requests as user numbers grow.

### 3.6. Maintainability

#### Modular Design:
- The login screen's code should be modular and well-documented, allowing for easy updates or modifications in the future.

#### Error Logs:
- Maintain logs of any failed login attempts or issues for debugging purposes.


# How To Run:

### Backend Setup:

1. Install the required packages:
npm i
2.  Set up your .env file based on the .env.example:
MONGO_URL=""
SECRET="REST-API-SECRET"
3. Start the backend server:
npm run start


### Fronted Setup:

1. Set up your .env file with the backend URI. For example:
VITE_BASE_API_URI='http://localhost:8080'
2. Install the required packages:
npm i
3. Start the frontend development server:
npm run dev
