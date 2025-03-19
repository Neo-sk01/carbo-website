"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, MessageSquare, Send, ThumbsUp, ThumbsDown, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import ReactMarkdown from "react-markdown"
import Image from "next/image"

// Define the Message interface based on shadcn-chatbot-kit
interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  createdAt?: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "👋 Hi there! I'm Carbo's AI assistant. How can I help you today?",
    createdAt: new Date(),
  },
]

const suggestions = [
  "What AI automation services do you offer?",
  "How can Carbo Software help my business?",
  "What types of businesses do you work with?",
  "I'd like to schedule a consultation",
  "Tell me about your pricing",
  "How much does a chatbot with booking integration cost?"
]

export default function ShadcnChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showButton, setShowButton] = useState(false)
  const [suggestionPage, setSuggestionPage] = useState(0)

  // For mobile view, adjust the chatbot position
  const [isMobile, setIsMobile] = useState(false)
  
  // Show button after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 2500) // Show after 2.5 seconds
    
    return () => clearTimeout(timer)
  }, [])
  
  // Reset suggestion page whenever chat is opened
  useEffect(() => {
    if (open) {
      setSuggestionPage(0)
    }
  }, [open])
  
  // Load messages from localStorage when component mounts
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages')
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages)
        // Convert string dates back to Date objects
        const messagesWithDates = parsedMessages.map((msg: any) => ({
          ...msg,
          createdAt: msg.createdAt ? new Date(msg.createdAt) : undefined
        }))
        setMessages(messagesWithDates)
      } catch (error) {
        console.error('Error parsing saved messages:', error)
      }
    }
  }, [])
  
  // Save messages to localStorage whenever they change
  useEffect(() => {
    try {
      if (messages.length > 0) {
        localStorage.setItem('chatMessages', JSON.stringify(messages))
      }
    } catch (error) {
      console.error('Error saving messages to localStorage:', error)
    }
  }, [messages])
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages, isGenerating])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  // Function to generate AI response
  const generateAIResponse = async (messageHistory: Message[]) => {
    try {
      setIsGenerating(true)
      
      // Format messages for the API
      const formattedMessages = messageHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
      
      // Call our API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: formattedMessages,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || `API error: ${response.status}`)
      }
      
      // Add the AI response to messages
      const aiMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: data.content,
        createdAt: new Date(),
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error generating AI response:', error)
      
      // Add a more detailed error message
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I'm sorry, I encountered an error connecting to my AI brain. This might be due to an API configuration issue. Please try again later or contact support if this persists.",
        createdAt: new Date(),
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsGenerating(false)
    }
  }

  const appendMessage = (message: { role: "user"; content: string }) => {
    const newMessage = {
      ...message,
      id: Date.now().toString(),
      createdAt: new Date(),
    } as Message
    
    // Add user message to the state
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    
    // Generate AI response with the updated message history
    generateAIResponse(updatedMessages)
  }

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault?.()
    
    if (!input.trim()) return
    
    const userMessage = {
      role: "user" as const,
      content: input,
    }
    
    appendMessage(userMessage)
    setInput("")
  }

  // Function to handle feedback
  const handleFeedback = (messageId: string, feedback: "thumbs-up" | "thumbs-down") => {
    // In a real implementation, you might want to send this feedback to your backend
    console.log(`Feedback for message ${messageId}: ${feedback}`)
    
    // Show a subtle notification 
    const button = document.activeElement as HTMLElement;
    if (button) {
      // Create and show a tooltip-like notification
      const notification = document.createElement('div');
      notification.innerText = `Thanks for your ${feedback === "thumbs-up" ? "positive" : "negative"} feedback!`;
      notification.className = 'fixed text-xs px-2 py-1 bg-background border rounded shadow-sm z-50 opacity-0 transition-opacity';
      notification.style.bottom = `${button.getBoundingClientRect().bottom + 10}px`;
      notification.style.left = `${button.getBoundingClientRect().left}px`;
      document.body.appendChild(notification);
      
      // Animate in and out
      setTimeout(() => {
        notification.style.opacity = '1';
      }, 10);
      
      setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
    }
  }

  // Function to get timestamp
  const getFormattedTime = (date?: Date) => {
    return date?.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Function to clear chat history
  const clearChat = () => {
    setMessages(initialMessages)
    localStorage.removeItem('chatMessages')
  }

  // Function to handle "More suggestions" button click
  const handleMoreSuggestions = () => {
    setSuggestionPage(prev => prev + 1)
  }

  // Split suggestions into groups of 3
  const SUGGESTIONS_PER_PAGE = 3
  const totalPages = Math.ceil(suggestions.length / SUGGESTIONS_PER_PAGE)
  const currentSuggestions = suggestions.slice(
    suggestionPage * SUGGESTIONS_PER_PAGE, 
    (suggestionPage + 1) * SUGGESTIONS_PER_PAGE
  )

  return (
    <>
      {/* Chat toggle button */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={() => setOpen(!open)}
            className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50"
            aria-label="Toggle chat"
          >
            {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          </Button>
        </motion.div>
      )}

      {/* Chat widget */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed right-4 bottom-20 z-50 flex flex-col rounded-lg shadow-xl bg-card border",
              isMobile ? "w-[calc(100%-2rem)] max-w-md" : "w-96"
            )}
            style={{ height: isMobile ? 'calc(80vh)' : '550px' }}
          >
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 overflow-hidden rounded-full">
                  <Image 
                    src="/FaviLogo.png" 
                    alt="Carbo" 
                    width={24} 
                    height={24}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="font-medium">Carbo AI Assistant</h3>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearChat}
                    className="h-8 w-8"
                    title="Clear chat history"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* Messages container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div 
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex flex-col",
                      message.role === "user" ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "group relative break-words rounded-lg p-3 text-sm max-w-[80%]",
                        message.role === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-foreground"
                      )}
                    >
                      <div className="prose prose-sm dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-400">
                        <ReactMarkdown>
                          {message.content}
                        </ReactMarkdown>
                      </div>
                      
                      {message.role === "assistant" && (
                        <div className="absolute -bottom-4 right-2 flex space-x-1 rounded-lg border bg-background p-1 text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            aria-label="Thumbs up"
                            onClick={() => handleFeedback(message.id, "thumbs-up")}
                          >
                            <ThumbsUp className="h-3 w-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            aria-label="Thumbs down"
                            onClick={() => handleFeedback(message.id, "thumbs-down")}
                          >
                            <ThumbsDown className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    {message.createdAt && (
                      <time
                        dateTime={message.createdAt.toISOString()}
                        className="mt-1 block px-1 text-xs opacity-50"
                      >
                        {getFormattedTime(message.createdAt)}
                      </time>
                    )}
                  </motion.div>
                ))}
                
                {isGenerating && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50"></div>
                  </motion.div>
                )}
                
                {/* Reference for auto-scrolling */}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Prompt suggestions */}
              {messages.length === 1 && (
                <div className="border-t">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="p-4"
                  >
                    <p className="mb-3 text-sm font-medium flex items-center">
                      <span className="mr-2">✨</span>
                      <span>Suggested questions</span>
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {currentSuggestions.map((suggestion, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1), duration: 0.2 }}
                          className="w-full text-left px-3 py-2 rounded-md border bg-background text-sm transition-colors hover:bg-primary/10 flex items-start min-h-[52px]"
                          onClick={() => appendMessage({ role: "user", content: suggestion })}
                        >
                          <span className="mr-2 text-primary font-medium">•</span>
                          <span className="line-clamp-2">{suggestion}</span>
                        </motion.button>
                      ))}
                      
                      {suggestionPage < totalPages - 1 && (
                        <motion.button
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + (currentSuggestions.length * 0.1), duration: 0.2 }}
                          className="mt-1 text-center px-3 py-2 rounded-md text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                          onClick={handleMoreSuggestions}
                        >
                          More suggestions...
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </div>
              )}
              
              {/* Input area with shadcn-inspired styling */}
              <form 
                onSubmit={handleSubmit} 
                className="flex items-end gap-2 border-t p-4"
              >
                <div className="relative flex-1">
                  <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px] max-h-[200px]"
                    rows={3}
                    disabled={isGenerating}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={isGenerating || !input.trim()}
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 