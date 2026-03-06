import { BrowserRouter, Routes, Route } from "react-router-dom";

import ViewPage from "./page/ViewPage";
import NotPage from "./page/NotPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewPage />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;