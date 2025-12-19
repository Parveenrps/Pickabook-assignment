import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!file) return alert("Upload an image first");

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);

    const res = await axios.post(
      "/generate",
      formData
    );

    setResult(res.data.imageUrl);
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Pickabook AI Personalisation</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br /><br />

      <button onClick={handleGenerate}>
        {loading ? "Generating..." : "Generate Illustration"}
      </button>

      <br /><br />

      {result && <img src={result} width="300" />}
    </div>
  );
}

export default App;
