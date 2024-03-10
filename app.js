const express = require("express");
const fs = require("fs");
// const https = require("https");
const multer = require("multer");
const path = require("path");
const axios = require("axios");
// we have to require form-data
const FormData = require("form-data");
const OpenAI = require("openai");

const app = express();

const openai = new OpenAI({
  apiKey: "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",
});

// Saving the file from request
const upload = multer({
  dest: "./uploads",
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = [".jpeg", ".png"];
    const extname = path.extname(file.originalname);
    if (allowedExtensions.includes(extname)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG AND PNG format is allowed"));
    }
  },
});

app.post("/upload-image", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("Error: Image file required");
  }
  const imagePath = path.join(
    __dirname,
    req.file.destination,
    req.file.filename
  );
  // Absolute path to saved image
  const formData = new FormData();
  formData.append("image", fs.createReadStream(req.file.path));
  try {
    const response = await axios.post(
      "https://api.api-ninjas.com/v1/imagetotext",
      formData,
      {
        headers: {
          "X-Api-Key": "CNLzaGtaEKh2aiN/H/ATbw==0mgjhooozZ9FWtca",
          "Content-Type": "multipart/form-data",
          ...formData.getHeaders(),
        },
      }
    );
    // Adding the text coming from the upload document to uploadedText as an Array
    let uploadedText = [];
    response.data.map((res) => {
      uploadedText = uploadedText + " " + res.text;
    });
    //Sending the text to GPT for processing
    const messages = [
      { role: "user", content: `Pharaphrase the "${uploadedText}" in json` },
    ];

    const GPTresponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: messages,
    });
    res.status(200).send(GPTresponse.choices[0].message.content);
  } catch (error) {
    console.error("Error making API request:", error);
    res.status(500).send(error.message);
  } finally {
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return;
      }
    });
  }
});

app.post("/", (req, res) => {
  res.send("Post ho gaya ");
});
module.exports = app;
