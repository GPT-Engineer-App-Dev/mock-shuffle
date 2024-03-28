import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TodoPage from "./pages/TodoPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
