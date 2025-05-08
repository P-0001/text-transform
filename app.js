import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import cleanText from "./src/fix.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// Transformation logic
function transformText(text, type) {}

app.get("/", (req, res) => {
  res.render("index", { output: null });
});

app.post("/transform", (req, res) => {
  const { inputText, transformType } = req.body;
  const { result } = cleanText(inputText);

  res.render("index", { output: result });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
