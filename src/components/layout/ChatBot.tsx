import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const suggestedPrompts = [
  "What course should I start with?",
  "How do the badges work?",
  "Recommend a learning path",
  "What's the refund policy?",
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 rounded-2xl border border-border bg-card shadow-2xl animate-scale-in">
          <div className="flex items-center justify-between p-4 border-b border-border gradient-bg rounded-t-2xl">
            <div className="flex items-center gap-2 text-white">
              <Bot className="h-5 w-5" />
              <span className="font-display font-semibold">CloudZen AI</span>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4 h-72 overflow-y-auto space-y-3">
            <div className="bg-muted rounded-lg p-3 text-sm">
              <p>👋 Hi! I'm CloudZen AI. How can I help you today?</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Try asking:</p>
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="block w-full text-left text-sm px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="icon" className="gradient-bg text-white border-0 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 text-center">AI responses are for guidance only</p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full gradient-bg text-white shadow-lg",
          "flex items-center justify-center transition-transform hover:scale-110",
          "glow-primary"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}
