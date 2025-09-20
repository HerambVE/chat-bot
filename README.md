# README: Mental Health Chatbot

## Project Overview
This project is a mental health chatbot designed to offer supportive and helpful conversations. It uses a unique, powerful combination of two AI models: a fine-tuned **RoBERTa-base GoEmotions model** for understanding user emotions and the **Gemini model** for generating compassionate and relevant responses. The chatbot is built with a **Node.js** backend and a **React** frontend, styled with **Tailwind CSS**.

---

## Key Features
* **Empathetic Conversations**: The chatbot provides a safe space for users to express their thoughts and feelings.
* **Emotion Recognition**: It uses the RoBERTa model to detect a user's emotional state, allowing for more tailored and understanding replies.
* **Intelligent Responses**: The Gemini model powers the chatbot's ability to generate human-like, helpful, and context-aware messages.
* **Publicly Available API**: The core AI models are hosted on a Google Colab notebook and made accessible to the backend via a public **ngrok** tunnel.
* **Modern Frontend**: The user interface is a single-page application built with React and styled for a clean, intuitive user experience.

---

## Important Note on the Colab API
The API for the AI models is hosted on a Google Colab Virtual Machine and exposed via **ngrok**. This means the API is **publicly available**—it can be used from anywhere with an internet connection.

However, please be aware that this setup has limitations:
* **No Commercial Scale**: It is not intended for large-scale, production use.
* **Usage Limits**: Free versions of ngrok and Colab have restrictions on bandwidth, session length, and connection limits.
* **Temporary URL**: The ngrok URL is temporary and will change every time you restart the Colab notebook. You must update the URL in your backend's `.env` file each time this happens.

---

## Setup Instructions
To get the chatbot running, you'll need to set up three main parts: the Colab API, the backend, and the frontend.

### Step 1: Set up the Colab API 🧠
This is where the AI brain of the chatbot lives.
1.  Open the `colab_api/roberta_gemini.ipynb` file in **Google Colab**.
2.  Run all the cells in the notebook. This will install the necessary libraries, load the AI models, and start a local web server.
3.  The notebook will use ngrok to create a public URL for this server. Once the server starts, a public URL will be displayed in the output. **Copy this URL**.

### Step 2: Configure and Run the Backend ⚙️
The backend connects the frontend to the Colab API.
1.  Open your terminal and navigate to the `backend` directory:
    ```bash
    cd C:\Users\maxst\Desktop\chat-bot\backend
    ```
2.  Install all the Node.js dependencies:
    ```bash
    npm install
    ```
3.  Create or open the **`.env`** file located in the `backend` directory. Fill in the required environment variables:
    * **PORT**: The port the server will run on.
    * **COLAB_API_URL**: The public ngrok URL you copied from Step 1.
    * **GEMINI_API_KEY**: Your personal API key for the Gemini model. You can get this for free from [Google AI Studio].

    Your `.env` file should look like this:
    ```env
    PORT = 6969
    COLAB_API_URL = https://<your-unique-ngrok-url>.ngrok-free.app
    GEMINI_API_KEY = your_gemini_api_key_here
    ```
4.  Start the backend server using **Nodemon**:
    ```bash
    npm run dev
    ```
    The server should now be running locally on port `6969`.

### Step 3: Launch the Frontend 🚀
The frontend is the user interface.
1.  Open a new terminal window and navigate to the `frontend` directory:
    ```bash
    cd C:\Users\maxst\Desktop\chat-bot\frontend
    ```
2.  Install the React and Tailwind CSS dependencies:
    ```bash
    npm install
    ```
3.  Start the development server for the frontend:
    ```bash
    npm run dev
    ```
    This will open the chatbot application in your browser, typically at `http://localhost:5173`.

---

## Project Directory Structure
```chat-bot/
├── backend/
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── services/
│       └── colab.js
├── colab_api/
│   ├── colabapi.txt
│   └── roberta_gemini.ipynb
└── frontend/
├── public/
│   ├── hERAMB-bg.png
│   ├── lOGO.png
│   ├── sANYA-bg.png
│   ├── sATISH-bg.png
│   └── sHUBHAM-bg.png
├── src/
│   ├── component/
│   │   ├── messageBox.jsx
│   │   └── searchbox.jsx
│   ├── pages/
│   │   ├── chat.jsx
│   │   ├── hero.jsx
│   │   ├── notfound.jsx
│   │   └── teams.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
