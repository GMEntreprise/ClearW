// utils/getFinancialAdvice.js
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Function to fetch user-specific data (mocked for this example)

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    const userPrompt = `
      Sur la base des données financières suivantes :
      - Budget Total : ${totalBudget} USD 
      - Dépenses : ${totalIncome} USD 
      - Revenus : ${totalSpend} USD
      Fournissez des conseils financiers détaillés en 2 phrases pour aider l'utilisateur à mieux gérer ses finances.
    `;

    // Send the prompt to the OpenAI API
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userPrompt }],
    });

    // Process and return the response
    const advice = chatCompletion.choices[0].message.content;

    console.log(advice);
    return advice;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des conseils financiers :",
      error
    );
    return "Désolé, nous n'avons pas pu obtenir les conseils financiers pour le moment. Veuillez réessayer plus tard.";
  }
};

export default getFinancialAdvice;
