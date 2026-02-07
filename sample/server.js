import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Can you explain what is  java ",
    });

    console.log(response.text);
  } catch (error) {
    if (error.status === 429) {
      console.log("⚠️ Quota exceeded. Enable billing or wait.");
    } else {
      console.error(error);
    }
  }
}

main();



