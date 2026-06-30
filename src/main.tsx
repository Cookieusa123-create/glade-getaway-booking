import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/figtree/300.css";
import "@fontsource/figtree/400.css";

createRoot(document.getElementById("root")!).render(<App />);
