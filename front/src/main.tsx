import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {Recipes} from "./pages/Recipes.tsx";
import {Users} from "./pages/Users.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>,
)
