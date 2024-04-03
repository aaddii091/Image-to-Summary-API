# Image Summary API

The Image Summary API is a powerful tool designed to convert images into text summaries. By leveraging state-of-the-art OCR (Optical Character Recognition) and AI summarization technologies, this API extracts text from images and paraphrases it to deliver concise summaries.

## Features

- **Image to Text**: Extract text from JPEG and PNG images with high accuracy.
- **AI-Powered Summarization**: Utilize advanced AI models to paraphrase extracted text into concise summaries.

## Getting Started

To begin using the Image Summary API, follow these steps to set up your environment and make your first request.



# Deployed on Google Functions Cloud 

* [Click Here](http://127.0.0.1:5001/register-555aa/us-central1/summaryAPI)

### Prerequisites

Ensure you have Node.js and npm installed on your system. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://your-repository-url/image-summary-api.git

3. Navigate to the project directory:

   ```bash
   cd image-summary-api

5. Install the required dependencies:

   ```bash
   npm install

7. Set up your environment variables by creating a Config.env file in the root directory with the following content:

   ```bash
   OPENAI_API=<Your_OpenAI_API_Key>
   IMG_TO_TEXT_API=<Your_Image_to_Text_API_Key>

9. for local deployment:

   ```bash
    firebase emulators:start --only functions
