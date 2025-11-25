# SkillSwap – A Local Skill Exchange Platform

## Project Purpose
SkillSwap is an interactive platform designed to connect individuals who want to offer, learn, and trade skills within their local community. Whether you're looking for guitar lessons, language exchange partners, coding assistance, or yoga training, SkillSwap provides a space to browse listings, rate experiences, and connect with local skill providers.

## Key Features

### 1. User Authentication
- **Login/Registration:** Users can create accounts or log in using email/password or Google authentication.
- **Password Validation:** Robust password validation on registration (uppercase, lowercase, minimum 6 characters).
- **Password Toggle:** Password input fields feature a toggle to show/hide passwords for better usability.
- **Forgot Password:** Functionality to send password reset emails and pre-fill email in the reset form.
- **Protected Routes:** Ensures that certain pages (e.g., Skill Details, My Profile) are only accessible to authenticated users.

### 2. Skill Listings & Details
- **Dynamic Skill Data:** Skill listings are fetched from a local JSON file (`services.json`).
- **Popular Skills Section:** Displays a curated list of popular skills with images, names, ratings, prices, and direct links to details.
- **Skill Details Page:** A dedicated page for each skill, showing comprehensive information.
  - Includes skill name, provider, image, average rating, reviews count, and available slots.
  - Features a "Book Session" form for authenticated users.
  - Displays a success toast upon session booking.

### 3. Homepage Sections
- **Hero Slider:** An engaging, auto-playing image slider with navigation, pagination, and informative text overlays (powered by Swiper.js).
- **Top-Rated Providers:** Showcases a list of highly-rated skill providers with their expertise and ratings.
- **How It Works:** A clear, step-by-step guide explaining the platform's usage.

### 4. Navigation & Layout
- **Responsive Navbar:** Includes a logo, navigation links (Home, My Profile), and dynamically displays user avatar/name (with dropdown for profile/logout) when logged in, or Login/Signup buttons when logged out.
- **Informative Footer:** Contains contact information, social media links, and legal notices (terms of use, privacy policy).
- **Persistent Layout:** Navbar and Footer remain consistent across all routes.
- **Responsiveness:** The entire application is designed to be fully responsive across mobile, tablet, and desktop devices using Tailwind CSS and daisyUI.

### 5. Profile Management
- **My Profile Page:** Displays the logged-in user's name, email, and profile image.
- **Profile Update:** Allows users to update their display name and photo URL directly from their profile page, with toast feedback.

## NPM Packages Used
- `react`: Core React library.
- `react-dom`: React DOM rendering library.
- `react-router-dom`: For routing within the single-page application.
- `firebase`: For user authentication (email/password, Google sign-in) and user profile management.
- `react-hot-toast`: For elegant and responsive toast notifications.
- `swiper`: For creating the interactive hero slider on the homepage.
- `react-icons`: For various icons used throughout the application (e.g., social media, password toggle).
- `tailwindcss`: For utility-first CSS styling.
- `daisyui`: A Tailwind CSS component library for pre-built, themeable UI components.
- `@tailwindcss/vite`: Tailwind CSS plugin for Vite.

## Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd skill_swap
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up Firebase Environment Variables:**
    Create a `.env` file in the root directory and add your Firebase configuration:
    ```
    VITE_APIKEY="your_firebase_apiKey"
    VITE_AUTHDOMAIN="your_firebase_authDomain"
    VITE_PROJECTID="your_firebase_projectId"
    VITE_STORAGEBUCKET="your_firebase_storageBucket"
    VITE_MESSAGINGSENDERID="your_firebase_messagingSenderId"
    VITE_APPID="your_firebase_appId"
    ```
    _Ensure these keys are correct for your Firebase project._

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173`.

5.  **Build for production (optional):**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the production-ready build.

## Live URL
[Link to your deployed application]