import { OpenAI } from 'openai';
import { config } from '../config/env';

const openai = new OpenAI({
  apiKey: config.openaiApiKey,
});

export async function getOpenAIResponse(prompt: string): Promise<string> {
  const chat = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4',
    temperature: 0.7,
  });

  const response = chat.choices[0].message.content;
  if (!response) throw new Error('No response from OpenAI');

  return response.trim();
}
