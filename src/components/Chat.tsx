import { useChat } from "@hashbrownai/react";

export default function Chat() {
  // 1. Generate the messages from a prompt
  const { messages, error, exhaustedRetries, sendMessage } = useChat({
    model: "gpt-5",
    system: "hashbrowns should be covered and smothered",
    messages: [
      {
        role: "user",
        content: "Write a very short paragraph about breakfast.",
      },
    ],
  });

  console.log({ error, exhaustedRetries });
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(messages);

  // 2. Render the content of each message
  return (
    <>
      <h3>Do you want the hashbrown lowdown?</h3>
      <button
        onClick={() =>
          sendMessage({
            role: "user",
            content:
              "Make it brief, funny, and inspired by, but not in the exact style, of HHGTTG.",
          })
        }
      >
        Yes, fry it up!
      </button>
      <div className="lowdown">
        {messages.map(
          (message, i) =>
            message.role == "assistant" && (
              <p key={i}>{message.content as string}</p>
            )
        )}
      </div>
    </>
  );
}
