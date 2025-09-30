import { useChat } from "@hashbrownai/react";

export default function Chat() {
  // 1. Generate the messages from a prompt
  const { messages } = useChat({
    model: "gpt-5",
    system: "hashbrowns should be covered and smothered",
    messages: [
      { role: "user", content: "Write a short story about breakfast." },
    ],
  });

  console.log(messages);

  // 2. Render the content of each message
  return (
    <>
      <h3>Chat Messages</h3>
      {messages.map((message, i) => (
        <p key={i}>{message.content as string}</p>
      ))}
    </>
  );
}
