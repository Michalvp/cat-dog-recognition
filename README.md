# Cat and Dog Recognition App 🐱🐶

An end-to-end web application that utilizes a Deep Learning model to classify images of cats and dogs with approximately **90% accuracy**.

## 📌 Project Overview
This project demonstrates how to bridge the gap between Machine Learning and Web Development. It features a custom Convolutional Neural Network (CNN) served via a lightweight web API, allowing users to upload images and receive real-time classification results.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API)
- **Backend/API:** Python, Flask
- **Machine Learning:** TensorFlow, Keras, NumPy

## 🚀 Key Features
- **High-Performance CNN:** Custom-built model trained in TensorFlow optimized for binary image classification.
- **Lightweight API:** Flask backend that handles image upload, preprocessing (resizing and normalization), and model inference.
- **Asynchronous Frontend:** Pure HTML/JS interface that communicates with the API seamlessly without page reloads.

## 📁 Project Structure
```text
cat-dog-recognition/
├── data/               # Dataset directory (train/validation)
├── models/             # Saved TensorFlow models (.h5 or .keras)
├── static/             # Frontend assets (CSS, JS)
├── templates/          # HTML files (index.html)
├── app.py              # Flask application script
├── requirements.txt    # Python dependencies
└── README.md           # Project documentation
