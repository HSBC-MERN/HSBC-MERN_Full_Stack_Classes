import React, { useState } from "react";
import axios from "axios";

const ChatContainer = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAIResponse] = useState("");

  const handleSubmitPrompt = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/api/chat",
        prompt,
      );

      setAIResponse(response.data.data);
      setLoading(false);
    } catch (err) {
      console.log("error respond AI");
    }
  };

  return (
    <div>
      <div className="container border border-primary m-5 p-5">
        <div className="row">
          <div className="row">
              <strong>Response:</strong>

          </div>

          <textarea
            type="text"
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            id="prompt"
            name="prompt"
            value={prompt}
            placeholder="Enter prompt ...."
          />
          {loading ? (
            <button className="btn btn-warning my-5 disable">
              {" "}
              Loading....{" "}
            </button>
          ) : (
            <button
              className="btn btn-primary my-5"
              onClick={handleSubmitPrompt}
            >
              {" "}
              Send Prompt{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
