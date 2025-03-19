"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, MessageSquare, ThumbsUp, ThumbsDown, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"

// Define the Message interface
interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "👋 Hi there! I'm Carbo's AI assistant. How can I help you today?",
  },
]

const suggestions = [
  "Tell me about your AI automation services",
  "How can you help my business?",
  "What industries do you serve?",
  "Book a consultation call",
]

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  // For mobile view, adjust the chatbot position
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const appendMessage = (message: { role: "user"; content: string }) => {
    setMessages(prev => [...prev, message as Message])
    
    // Simulate bot response
    setTimeout(() => {
      setIsGenerating(true)
      
      // Simulate typing delay for realism
      setTimeout(() => {
        let response: Message
        
        // Simple response logic based on user message
        if (message.content.toLowerCase().includes("automation")) {
          response = {
            id: Date.now().toString(),
            role: "assistant",
            content: "Our AI automation services help businesses streamline workflows, reduce manual tasks, and improve efficiency. We use cutting-edge AI models to create custom solutions tailored to your specific needs.",
          }
        } else if (message.content.toLowerCase().includes("industries") || message.content.toLowerCase().includes("serve")) {
          response = {
            id: Date.now().toString(),
            role: "assistant",
            content: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are adaptable to various business contexts and can be customized to meet specific industry requirements.",
          }
        } else if (message.content.toLowerCase().includes("consultation") || message.content.toLowerCase().includes("call") || message.content.toLowerCase().includes("book")) {
          response = {
            id: Date.now().toString(),
            role: "assistant",
            content: "I'd be happy to help you schedule a consultation call! You can book directly through our Calendly link: https://calendly.com/neosk-carbosoftware",
          }
        } else {
          response = {
            id: Date.now().toString(),
            role: "assistant",
            content: "Thank you for your message! We specialize in developing custom AI automation solutions to help businesses like yours increase efficiency and reduce costs. Would you like to learn more about a specific service or schedule a consultation call?",
          }
        }
        
        setMessages(prev => [...prev, response])
        setIsGenerating(false)
      }, 1500)
    }, 500)
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

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50"
        aria-label="Toggle chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat widget */}
      <div
        className={cn(
          "fixed right-4 bottom-20 z-50 flex flex-col rounded-lg shadow-xl transition-all duration-300 ease-in-out bg-card border",
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
          isMobile ? "w-[calc(100%-2rem)] max-w-md" : "w-96"
        )}
        style={{ height: isMobile ? 'calc(80vh)' : '550px' }}
      >
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <h3 className="font-medium">Carbo AI Assistant</h3>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setOpen(false)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length > 0 ? (
              messages.map((message) => (
                <div 
                  key={message.id}
                  className={cn(
                    "flex flex-col",
                    message.role === "user" ? "items-end" : "items-start"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "break-words rounded-lg p-3 text-sm max-w-[80%]",
                      message.role === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-foreground"
                    )}
                  >
                    <ReactMarkdown className="prose prose-sm dark:prose-invert">
                      {message.content}
                    </ReactMarkdown>
                    
                    {message.role === "assistant" && (
                      <div className="absolute -bottom-4 right-2 flex space-x-1 rounded-lg border bg-background p-1 text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6"
                        >
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6"
                        >
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))
            ) : null}
            
            {isGenerating && (
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.3s]"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50"></div>
              </div>
            )}
          </div>
          
          {/* Prompt suggestions */}
          {messages.length === 1 && (
            <div className="p-4">
              <p className="mb-2 text-sm font-medium">Try these prompts ✨</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, i) => (
                  <button
                    key={i}
                    className="rounded-md border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-muted"
                    onClick={() => appendMessage({ role: "user", content: suggestion })}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input area */}
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
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
} 