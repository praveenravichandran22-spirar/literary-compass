# Literary Compass

Welcome to Literary Compass, a book discovery web application built with Next.js, React, TypeScript, and Tailwind CSS. This project serves as a functional prototype demonstrating modern web development practices, including the use of AI for enhanced user experiences.

## Core Features

- **Homepage & Navigation**: A welcoming homepage that introduces the app and provides clear navigation to major book categories.
- **Category Drilldown**: Users can explore books by drilling down from high-level headings (e.g., Fiction) to more specific subcategories (e.g., Crime Thrillers). This feature is enhanced by an AI agent that suggests related, implicit categories.
- **Product Grid**: A responsive grid displays books with essential information like title, author, price, and cover image.
- **Product Detail View**: A comprehensive page for each book, featuring full metadata, user reviews, and AI-powered recommendations for other books.
- **AI-Powered Recommendations**: Utilizes Genkit flows to provide smart category suggestions and personalized book recommendations based on user browsing history.
- **Smooth Transitions**: Incorporates skeleton loading states and subtle animations for a better user experience during page navigation.
- **Responsive & Accessible**: Designed to be fully responsive and accessible, adhering to WCAG AA standards.
- **Simulated Persistence**: Uses browser `localStorage` to simulate user browsing history, which then feeds into the AI recommendation engine.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- **AI**: [Firebase Genkit](https://firebase.google.com/docs/genkit) for generative AI flows
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/literary-compass.git
    cd literary-compass
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To run the app in development mode, use the following command. This will start the Next.js application.

```bash
npm run dev
```

The application will be available at `http://localhost:9002`.

### Running Genkit Flows

To run the Genkit AI flows for development and testing, you will need to set up your environment variables.

1.  Create a `.env` file in the root of the project.
2.  Add your `GOOGLE_API_KEY` to the `.env` file:
    ```
    GOOGLE_API_KEY=your_google_ai_api_key
    ```

Start the Genkit development server:

```bash
npm run genkit:dev
```

This will start the Genkit developer UI, where you can inspect and test your AI flows.

### Building for Production

To create a production build of the application:

```bash
npm run build
```

This command compiles the TypeScript code, optimizes the Next.js app, and prepares it for deployment.

### Deployment

This application is configured for deployment on Firebase App Hosting. To deploy, ensure you have the Firebase CLI installed and configured.

1.  **Login to Firebase:**
    ```bash
    firebase login
    ```

2.  **Initialize Firebase in your project (if you haven't already):**
    ```bash
    firebase init hosting
    ```
    Follow the prompts, selecting your Firebase project and configuring App Hosting.

3.  **Deploy to Firebase:**
    ```bash
    firebase deploy --only hosting
    ```
This will build and deploy your Next.js application to Firebase App Hosting. The `apphosting.yaml` file contains the basic configuration for the backend.
