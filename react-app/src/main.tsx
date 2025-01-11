import { createRoot, Root as ReactRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from "react-router-dom";
import RouterConfig from "./router/RouterConfig.tsx";


const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
  throw new Error("Failed to find the root element.");
}

const root: ReactRoot = createRoot(rootElement);

root.render(
  <RouterProvider router={RouterConfig} fallbackElement={<div>Loading...</div>}/>
)
