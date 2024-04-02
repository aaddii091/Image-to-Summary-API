// const serverless = require("serverless-http");
const functions = require("firebase-functions");
const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: "../Image-to-Summary-API/functions/config.env" });

const multer = require("multer");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

// we have to require form-data
const FormData = require("form-data");
const OpenAI = require("openai");

const app = express();
// const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API,
});

// Saving the file from request
const upload = multer({
  storage: multer.memoryStorage(), // Store file in memory
  limits: { fileSize: 10 * 1024 * 1024 },
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

  // Absolute path to saved image
  const formData = new FormData();
  formData.append("image", req.file.buffer);
  try {
    const response = await axios.post(
      "https://api.api-ninjas.com/v1/imagetotext",
      formData,
      {
        headers: {
          "X-Api-Key": process.env.IMG_TO_TEXT_API,
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
      { role: "user", content: `Paraphrase the "${uploadedText}" in json` },
    ];

    const GPTresponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: messages,
    });
    res.status(200).send(GPTresponse.choices[0].message.content);
  } catch (error) {
    console.error("Error making API request:", error);
    res.status(500).send(error.message);
  }
  // finally {
  //   fs.unlink(req.file.path, (err) => {
  //     if (err) {
  //       console.error("Error deleting file:", err);
  //       return;
  //     }
  //   });
  // }
});

// GET request handler
app.get("/", (req, res) => {
  try {
    res.send("Post ho gaya ");
  } catch (error) {
    // console.error("Error handling GET request:", error);
    res.status(500).send("Internal Server Error ", error.message);
  }
});

// POST request handler
app.post("/", (req, res) => {
  try {
    res.send("Post ho gaya ");
  } catch (error) {
    // console.error("Error handling POST request:", error);
    res.status(500).send("Internal Server Error", error.message);
  }
});
app.listen(6969, () => {
  console.log("Adrit ki maa ki chut");
});
