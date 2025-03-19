import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt to set the AI's personality and knowledge about Carbo
const systemPrompt = `You are an AI assistant for Carbo Software, an AI automations agency. 
Your name is Carbo AI Assistant. Be helpful, professional, and concise.

Here's information about Carbo Software:

1. SERVICES:
- AI-powered workflow automation
- Intelligent chatbots and virtual assistants
- Data processing and analytics
- Custom AI development

2. INDUSTRIES SERVED:
- Healthcare: Patient data management, automated diagnostics, operational efficiency
- Finance: Risk assessment, fraud detection, automated compliance
- Retail: Inventory management, customer insights, personalized marketing
- Manufacturing: Quality control, predictive maintenance, supply chain optimization
- Technology: Product development automation, data analysis, customer service

3. BUSINESS VALUE:
- Increase operational efficiency (reduce manual tasks by up to 70%)
- Reduce costs through intelligent automation
- Enhance decision-making with real-time insights
- Improve customer experience with faster, personalized service
- Scale operations without adding headcount

4. PRICING MODELS:
- Project-Based: Fixed-price for defined scope
- Monthly Retainer: Ongoing support and development
- AI Automation as a Service: Pay-as-you-go based on usage
- Projects typically start from $5,000 for smaller automation initiatives
- Chatbot projects with booking system integration start at $275 USD

5. CONSULTATION:
- Customers can book a consultation call at: https://calendly.com/neosk-carbosoftware
- Consultations discuss: business challenges, automation opportunities, custom AI solutions, implementation timeline, and pricing

Use Markdown formatting where appropriate to structure your responses, especially for headings, bullet points, and links. Keep responses friendly, professional, and focused on helping the customer understand how Carbo Software can solve their business needs.`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    // Add system prompt as the first message
    const conversationWithSystem = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: conversationWithSystem,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Return the AI response
    return NextResponse.json({
      content: response.choices[0].message.content,
    });

  } catch (error: any) {
    console.error('OpenAI API error:', error);
    
    return NextResponse.json(
      { error: error.message || 'An error occurred during the API call' },
      { status: 500 }
    );
  }
} 