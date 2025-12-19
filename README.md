# Pickabook AI Personalisation

A small end-to-end prototype where a user can upload a child’s photo, and the attached illustration gets personalised using AI.  

---

## Features

- Upload a child’s photo via a simple React frontend.
- AI Personalisation using Stable Diffusion Inpainting.
- Converts the uploaded face into a stylised illustration.
- Inserts the illustration into a template image.

---

## Tech Stack

- Frontend: React  
- Backend: Node.js, Express  
- AI Model: Replicate – stability-ai/stable-diffusion-inpainting  
- Environment Variables: .env file to store API keys and model version.  

---

## Setup Instructions

1. Clone the repository:

git clone <your-repo-link>
cd Pickabook-assignment

markdown
Copy code

2. Frontend Setup:

cd frontend
npm install
npm run dev

markdown
Copy code

3. Backend Setup:

cd backend
npm install

markdown
Copy code

4. Environment Variables:  
Create a `.env` file in the backend folder:

REPLICATE_KEY=your_replicate_api_key
MODEL_VERSION=stability-ai/stable-diffusion-inpainting:<version_id>

markdown
Copy code

5. Run Backend:

node index.js

yaml
Copy code

6. Open the Frontend:  
Navigate to `http://localhost:5173` (or the port your React app runs on) and upload a child’s photo.

---

## Architecture Diagram (Text-Based)

[User Frontend - React]
|
v
[Backend - Node.js / Express]
|
v
[Replicate AI Model - Stable Diffusion Inpainting]
|
v
[Generated Illustration Image]
|
v
[Frontend - Display Result]

yaml
Copy code

---

## Model Choice

- Stable Diffusion Inpainting on Replicate was chosen because:
  - Allows image inpainting and personalisation.
  - Can work with uploaded photos and insert them into template illustrations.
  - Free version available with limited usage.

---

## Limitations

- Free-tier of Replicate has limited API usage.
- Processing may be slow depending on server and model.
- Model quality may vary for different photos and backgrounds.

---

## Improvements for v2

- Add face detection and alignment for better illustration placement.
- Implement caching to avoid repeated requests for the same input.
- Add more illustration styles and templates.
- Handle multiple face uploads for group illustrations.
- Deploy the full stack to Vercel / Render for production usage.

---

## Usage

1. Upload a child’s photo.  
2. Click Generate Illustration.  
3. Wait for AI to process and display the personalised illustration.