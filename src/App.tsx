
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router";
import Home from "./views/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={
        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Tauri React App!</h1>
          <p className="text-lg text-gray-700">This is a simple application using Tauri with React and Tailwind CSS.</p>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
