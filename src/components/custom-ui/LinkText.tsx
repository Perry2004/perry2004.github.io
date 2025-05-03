import React from "react";

export function LinkText({ children }: { children: React.ReactNode }) {
  return <span className="underline">{children}</span>;
}

export default LinkText;
