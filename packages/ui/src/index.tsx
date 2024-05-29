import "regenerator-runtime/runtime";
import { createRoot } from "react-dom/client";
import * as React from "react";
import App from "./App";

function initializeReactApp() {
  const appContainer = document.getElementById("appContainer");
  if (!appContainer) throw new Error("No #appContainer found in DOM");
  const root = createRoot(appContainer);
  root.render(<App />);
}

initializeReactApp();

export { default as Channel } from "./components/Channel";
