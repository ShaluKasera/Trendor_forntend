import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import PageNotFound from "./pages/PageNotFound";
import Signin from "./pages/SignupPage/Signin";
import Video from "./pages/VideoPage/Video";
import Upload from "./pages/UploadPage/Upload";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Signin" element={<Signin />} />
         <Route path="/Video" element={<Video />} />
         <Route path="/Upload" element={<Upload />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
