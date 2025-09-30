import React from "react";
import { HashbrownProvider } from "@hashbrownai/react";

const url = "http://localhost:3333/chat/";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  console.log("Using Hashbrown API URL:", url);
  return <HashbrownProvider url={url}>{children}</HashbrownProvider>;
}
