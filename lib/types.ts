export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

export interface ChatResponse {
  content: string;
  error?: string;
}

export interface FeedbackData {
  messageId: string;
  feedback: 'thumbs-up' | 'thumbs-down';
  timestamp: Date;
} 