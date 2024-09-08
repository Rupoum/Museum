"use client";
import { useEffect } from "react";

interface DialogflowWidgetProps {
  language: string; // Accept language as a prop
  key: number;
}

const DialogflowWidget: React.FC<DialogflowWidgetProps> = (
  { language },
  { key }
) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []); // Load the script once
  return (
    <df-messenger
      key={key}
      intent="WELCOME"
      chat-title="mira"
      agent-id="2f3f1e74-f184-47dc-b104-1670060d410e"
      language-code={language}
    ></df-messenger>
  );
};

export default DialogflowWidget;
