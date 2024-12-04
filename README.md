# Chat Application with Data Visualizations

## Overview

This project is a responsive chat application built using **Next.js**, **React**, and **Tailwind CSS**. It allows users to:

- Send text messages and display them dynamically in the chat window.
- Upload and preview images before sending.
- Render static and dynamic tables for data visualization.

The app uses modular components for scalability and **Framer Motion** for animations.

---

## Features

- **Responsive Chat Interface**: Optimized for mobile and desktop with a clean, modern design.
- **Message Handling**:
  - Send messages with a "Send" button or the `Enter` key.
  - Preview images before sending.
- **Dynamic Visualizations**:
  - Render tabular data inline as part of the chat.
  - Support for static and dynamic table views.
- **Smooth Animations**:
  - Messages, modals, and UI elements use animations for an enhanced user experience.

---

## Time Allocation

| **Activity**      | **Time Spent** |
| ----------------- | -------------- |
| **Research**      | 4 hours        |
| **Development**   | 4 hours        |
| **Documentation** | 2 hours        |
| **Total**         | 10 hours       |

### Breakdown

1. **Research**:

   - Investigated the best frameworks and libraries for building a modern chat application.
   - Explored Tailwind CSS for responsive design and Framer Motion for animations.
   - Studied Next.js for server-side rendering and scalability.

2. **Development**:

   - Built reusable React components for chat functionality (e.g., `MessageInput`, `MessageList`).
   - Integrated Tailwind CSS for styling and responsiveness.
   - Added Framer Motion for animations.

3. **Testing**:

   - Manually tested the app for responsiveness across devices.
   - Verified features like image preview, message sending, and table rendering.

4. **Deployment**:

   - Prepared the app for deployment by running production builds.

5. **Documentation**:
   - Created a comprehensive README with setup instructions, methodology, and usage guide.

---

## Methodology

### Development Methodology

I followed an **incremental development methodology** with a focus on modular components and test-driven development.

#### **Key Steps**:

1. **Requirement Analysis**:

   - Identified key features: chat functionality, image uploads, and table visualizations.
   - Defined the need for responsiveness and smooth animations.

2. **Technology Selection**:

   - **Next.js**: Selected for its server-side rendering and scalability.
   - **React**: Used for building dynamic, reusable UI components.
   - **Tailwind CSS**: Chosen for its utility-first CSS approach, allowing rapid design iterations.
   - **Framer Motion**: Incorporated for its ease of use and robust animation capabilities.

3. **Component-Based Architecture**:

   - Designed modular components (e.g., `ChatWindow`, `MessageInput`, `MessageList`) to enable reuse and maintainability.

4. **Testing and Feedback**:
   - Tested features on different devices and screen sizes.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>=16.x)
- **npm** (>=7.x)

### Installation

1. Install dependencies:

   npm install

### Running the Application

Start the development server:

npm run dev

Visit [http://localhost:3000] to view the app.

---

## Usage

1. **Send Messages**:

   - Type a message in the input field.
   - Press **Enter** or click "Send" to add the message to the chat window.

2. **Upload and Send Images**:

   - Click "Upload Image" to select an image.
   - Preview the image in the input area before sending.
   - Press **Enter** or click "Send" to send the image.

3. **Display Tables**:
   - Static tables are displayed as part of the chat or below the chat window.
   - Use the `TableView` component for dynamic table rendering.

---

## Future Improvements

1. **Backend Integration**:

   - Add real-time chat functionality using WebSockets or Firebase.

2. **User Management**:

   - Introduce authentication for personalized chat sessions.

3. **Dynamic Table Features**:

   - Enable users to upload CSV files to populate tables dynamically.

4. **Enhanced Animations**:
   - Add more engaging animations for user interactions.

---
