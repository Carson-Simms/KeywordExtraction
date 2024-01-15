const express = require("express");
const cors = require("cors");
const { NlpManager } = require("node-nlp");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Use CORS middleware (for development, allow all origins)
app.use(cors());

// For parsing application/json
app.use(bodyParser.json());

// NLP Manager
const manager = new NlpManager({ languages: ["en"] });

app.post("/extract-keywords", async (req, res) => {
  const text = req.body.text;

  // Process text with NLP.js
  const response = await manager.process("en", text);
  const keywords = response.entities.map((entity) => entity.option);

  // Send keywords back to client
  res.json({ keywords: keywords });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
