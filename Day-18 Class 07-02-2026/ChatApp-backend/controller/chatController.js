const { GoogleGenAI } = require("@google/genai");

const AIResponseStream = async (req, res) => {
  try {
    const { prompt } = req.body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    // ✅ Streaming headers
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const stream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    // 🔥 STREAM TOKEN BY TOKEN
    for await (const chunk of stream) {
      const text = chunk.text || "";
      res.write(text); // ✅ THIS IS THE KEY
    }

    res.end(); // ✅ end stream
  } catch (err) {
    console.error(err);
    res.status(500).end("Error generating AI response");
  }
};

module.exports = AIResponseStream;
