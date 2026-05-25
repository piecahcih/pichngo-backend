import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

export async function geminichatbot(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
  });
  console.log(response.text);
  return response.text
}
