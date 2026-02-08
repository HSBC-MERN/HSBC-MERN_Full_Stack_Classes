import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const ChatContainer = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmitPrompt = async () => {
    if (!prompt.trim()) return;

    const userMessage = {
      role: "user",
      content: prompt,
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    // Add empty assistant message (for streaming)
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const response = await fetch("https://backend-chatai-assistant.onrender.com/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);

      // Append streaming chunk to last assistant message
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content += chunk;
        return updated;
      });
    }

    setLoading(false);
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-box">
        <div className="chat-header">🤖 AI Assistant</div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${
                msg.role === "user" ? "user" : "assistant"
              }`}
            >
              {msg.role === "assistant" ? (
                <div className="markdown">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                <p>{msg.content}</p>
              )}
            </div>
          ))}

          {loading && <span className="cursor">▌</span>}
          <div ref={bottomRef}></div>
        </div>

        <div className="chat-input">
          <textarea
            placeholder="Type your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
          />

          <button onClick={handleSubmitPrompt} disabled={loading}>
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
