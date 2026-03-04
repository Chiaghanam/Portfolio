import { BrowserRouter, Routes, Route } from "react-router-dom";

import ViewPage from "./page/ViewPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;