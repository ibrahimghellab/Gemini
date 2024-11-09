import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const prompt = `List a few popular cookie recipes using this JSON schema:

Recipe = {'recipeName': string}
Return: Array<Recipe>`;

const result = await model.generateContent(prompt);
console.log(result.response.text());