import { useState } from "react";
import { Send, Smile, Menu } from "lucide-react";

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! How are you?", sender: "other" },
    { id: 2, text: "I’m good 😃, what about you?", sender: "me" },
  ]);
  const [input, setInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          menuOpen ? "w-64" : "hidden md:flex md:w-64"
        } bg-white border-r border-gray-200 flex flex-col`}
      >
        <div className="p-4 font-bold text-xl border-b">Chats</div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 hover:bg-gray-100 cursor-pointer">John Doe</div>
          <div className="p-4 hover:bg-gray-100 cursor-pointer">Jane Smith</div>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu />
            </button>
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            <span className="font-semibold">John Doe</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs ${
                  msg.sender === "me"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 flex items-center gap-2 border-t bg-white">
          <button className="p-2 text-gray-500">
            <Smile />
          </button>
          <input
            type="text"
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="p-2 bg-blue-500 text-white rounded-xl"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
