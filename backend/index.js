import express from "express";
import multer from "multer";
import Replicate from "replicate";
import fs from "fs";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors()); // allow frontend requests
app.use(express.json());

const upload = multer({ dest: "uploads/" }); // temp folder for uploaded images

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

app.post("/generate", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    const imageData = fs.readFileSync(req.file.path, { encoding: "base64" });

    // Call replicate inpainting / generation model
    const output = await replicate.run(
      "stability-ai/stable-diffusion-inpainting:95b7223104132402a9ae91cc677285bc5eb997834bd2349fa486f53910fd68b3",
      {
        input: {
          prompt: "Make it look awesome",
          image: `data:image/png;base64,${imageData}`,
          mask: null, 
          width: 512,
          height: 512
        },
      }
    );

    // Remove temp file
    fs.unlinkSync(req.file.path);

    // Return first generated image URL
    res.json({ imageUrl: output[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI generation failed" });
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
