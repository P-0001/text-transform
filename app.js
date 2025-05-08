import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import cleanText from "./src/fix.js";
import { readFileSync } from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const { version } = JSON.parse(
  readFileSync(path.join(__dirname, "package.json"), "utf8")
);
const app = express();

// add version to the response header
app.use((req, res, next) => {
  res.setHeader("x-version", version);
  next();
});

// set max body size to 10mb
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { output: null, version });
});

app.post("/transform", (req, res) => {
  const { inputText } = req.body;
  const { result } = cleanText(inputText);
  res.render("index", { output: result, version });
});

app.post("/api/transform", async (req, res) => {
  const { inputText } = req.body;

  if (!req.headers["content-type"]?.includes("application/json")) {
    return res
      .status(400)
      .json({ error: "Content-Type must be application/json" });
  }

  if (!inputText || inputText.length === 0) {
    return res.status(400).json({ error: "inputText is required" });
  }

  const result = await cleanText(inputText);

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
