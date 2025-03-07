// app/api/chatbot/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  console.log("Received message:", message); // Log le message reçu

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10 secondes de timeout

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // ou 'gpt-3.5-turbo'
        prompt: `You are a virtual assistant for a gym website. Answer the following question: "${message}"`,
        max_tokens: 150,
      }),
      signal: controller.signal, // Associe l'AbortController à la requête
    });

    clearTimeout(timeout); // Annule le timeout si la requête réussit

    console.log("OpenAI API response status:", response.status); // Log le statut de la réponse

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData); // Log les erreurs
      return NextResponse.json({ error: "OpenAI API error" }, { status: response.status });
    }

    const data = await response.json();
    console.log("Received data:", data); // Log les données reçues

    const chatbotResponse = data.choices[0].text.trim();
    return NextResponse.json({ response: chatbotResponse });
  } catch (error) {
    console.error("Error calling OpenAI API:", error); // Log les erreurs
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    clearTimeout(timeout); // Nettoie le timeout
  }
}