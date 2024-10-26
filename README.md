
# Insurance Policy Management System - Frontend

This repository contains the Frontend (FE) of the Insurance Policy Management System. Built with React, it provides a user-friendly interface for generating quotes, purchasing policies, and managing claims.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Frontend](#running-the-frontend)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Security Considerations](#security-considerations)
- [Testing](#testing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Interface**: Responsive and intuitive UI built with React and Material-UI.
- **User Authentication**: Registration and login.
- **Quote Generation**: Multi-step form for quote generation.
- **Policy Purchase**: Purchase policies.
- **Claims Management**: File and view claims.
- **Routing**: Client-side routing using React Router.

## Prerequisites

- **Node.js**: Version 14.x or later
- **npm**: Version 6.x or later
- **Git**: For cloning the repository

## Installation

Clone the Repository:

```bash
git clone https://github.com/saimanish1/insurance-frontend.git
cd insurance-frontend
```

Install Dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and configure:

```plaintext
REACT_APP_API_BASE_URL=http://localhost:3000
```

Replace the URL if your backend API is running on a different port or URL.

## Running the Frontend

**Development Mode:**

```bash
npm start
```

**Production Build:**

```bash
npm run build
```

## Project Structure

```plaintext
src/
├── components/          # Reusable components
├── pages/               # Page components
├── services/            # API service files
├── App.js               # Main component
└── index.js             # Entry point
public/                  # Public assets
package.json             # Dependencies and scripts
```

## Available Scripts

- `npm start`: Start in development mode.
- `npm run build`: Build for production.
- `npm test`: Run tests.
- `npm run eject`: Eject from Create React App (use cautiously).

## Security Considerations

- **JWT Authentication**: Secure authentication with tokens.
- **Environment Variables**: API URL stored securely in `.env`.

## Testing

Launch the test runner:

```bash
npm test
```


