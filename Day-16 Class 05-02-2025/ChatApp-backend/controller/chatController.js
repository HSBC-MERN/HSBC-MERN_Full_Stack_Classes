const { GoogleGenAI } = require("@google/genai");

//chat with AI using prompts
const AIResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    

    res.status(200).json({ data: response.text });
  } catch (err) {
    res.status(500).json({ message: "Server Not found" });
  }
};

module.exports = AIResponse;
