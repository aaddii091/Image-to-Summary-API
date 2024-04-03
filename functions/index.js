const functions = require("firebase-functions");
const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const axios = require("axios");
const bodyParser = require("body-parser");

const FormData = require("form-data");
const OpenAI = require("openai");

const fileParser = require("express-multipart-file-parser");

const app = express();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileParser);

app.post("/upload-image", async (req, res) => {
  if (!req.files[0].buffer) {
    return res.status(400).send("Error: Image file required");
  }

  // Absolute path to saved image

  const formData = new FormData();
  formData.append("image", req.files[0].buffer);

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

    let uploadedText = "";
    response.data.forEach((res) => {
      uploadedText += " " + res.text;
    });

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
});

app.get("/", (req, res) => {
  try {
    res.send("Post ho gaya ");
  } catch (error) {
    res.status(500).send("Internal Server Error ", error.message);
  }
});

app.post("/", (req, res) => {
  try {
    res.send("Post ho gaya ");
  } catch (error) {
    res.status(500).send("Internal Server Error", error.message);
  }
});

exports.summaryAPI = functions.https.onRequest(app);
