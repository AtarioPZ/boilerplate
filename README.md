# Next.js Boilerplate

This is a **Next.js** project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), bundled with **React 18**, **TypeScript**, and **nodemailer** for handling contact form submissions.

## Features

- **React 18** for building user interfaces.
- **TypeScript** for type safety and better developer experience.
- **nodemailer** for sending emails through SMTP in the backend.
- **Custom Section Layout**: A reusable layout component used in multiple places.
- **Contact Form**: A simple contact form with client-side validation and email sending functionality using nodemailer.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Getting Started

1. Clone the repository:

   ```bash
   git clone git@github.com:AtarioPZ/boilerplate.git

2. Install dependencies:
If you're using npm:

    ```bash
    npm install
    ``` 
   Or, if you're using yarn:
   ```bash
    yarn install
    ```
   
3. Set up environment variables:

   Make a ```.env``` and setup your SMTP settings for ```nodemailer```

   ```bash
    SMTP_HOST=your-smtp-host
    SMTP_PORT=your-smtp-port
    SMTP_USER=your-smtp-username
    SMTP_PASSWORD=your-smtp-password
    SMTP_FROM_EMAIL=your-from-email
   ```

4. Run the development server:
   
   After installing dependencies and setting up environment variables, start the development server:
   If you're using npm:
   ```
     npm run dev
   ```
   Or, if you're using yarn:
   ```bash
    yarn run dev
    ```

## Project Structure [WIP]

  ```
    /boilerplate
    │
    ├── /app
    │   ├── /contact
    │   │   ├── page.tsx             # Contact page component
    │   │
    │   └── /api
    │       ├── /contact
    │           ├── route.ts         # API route for handling contact form submissions
    │
    ├── /hooks
    │   ├── useContactForm.ts        # Custom hook for managing the contact form state and submission
    │
    ├── /components
    │   ├── /Layout
    │   │   ├── CustomSection.tsx    # Reusable layout component
    │
    ├── .env                         # Example environment variables file
    ├── package.json                 # Project dependencies and scripts
    ├── tsconfig.json                # TypeScript configuration file
    ├── next.config.js               # Next.js configuration file
    └── README.md                    # Project documentation

  ```
