# Cat and Dog Recognition App 🐱🐶

An end-to-end web application that utilizes a Deep Learning model to classify images of cats and dogs with approximately **90% accuracy**.

## 📌 Project Overview
This project demonstrates how to bridge the gap between Machine Learning and Web Development. It features a custom Convolutional Neural Network (CNN) served via a lightweight web API, allowing users to upload images and receive real-time classification results. 

The repository now features **two distinct variants** of the application architecture, allowing you to run the project using either a classic Python-based web server or a modern JavaScript stack.

## 🛠️ Tech Stack

### Shared Machine Learning Core
- **Machine Learning:** TensorFlow, Keras, NumPy

### Variant 1: Python/Flask & Vanilla JS
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API)
- **Backend/API:** Python, Flask

### Variant 2: Node.js & React
- **Frontend:** React.js
- **Backend/API:** Node.js (e.g., Express)

## 🚀 Key Features
- **High-Performance CNN:** Custom-built model trained in TensorFlow optimized for binary image classification.
- **Two Backend Implementations:** Choose between a lightweight Flask backend or a fast Node.js API to handle image uploads, preprocessing, and model inference.
- **Multiple Frontends:** Compare a seamless, pure HTML/JS interface (Vanilla) against a modern, component-driven React.js SPA (Single Page Application).
- **Asynchronous Communication:** Both variants communicate with their respective APIs asynchronously without page reloads.

## 📁 Project Structure
```text
cat-dog-recognition/
├── CVDR_model.keras        # Saved TensorFlow model
├── static/                 # Frontend assets (CSS, JS) for variant 1
├── templates/              # HTML files (index.html) for variant 1
├── REST_API.py             # Flask application script for variant 1
├── backend/                # Node.js API source code for variant 2
├── frontend/               # React.js application source code for variant 2
└── README.md               # Project documentation
