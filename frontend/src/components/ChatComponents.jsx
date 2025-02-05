import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");

    const handleSendMessage = async () => {
        try {
            const res = await axios.post('http://localhost:8000/query/', {
                query: query,
            });
            setResponse(res.data.response);
        } catch (error) {
            console.error("Error fetching response:", error);
        }
    };

    return (
        <div>
            <div className="chatbox">
                <div className="messages">
                    <div className="user-message">{query}</div>
                    <div className="bot-response">{response}</div>
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your query..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatComponent;
