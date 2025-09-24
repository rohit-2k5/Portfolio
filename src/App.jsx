
import MainPage from "./components/MainPage.jsx"
import NotFound from "./components/NotFound";

import { Toaster } from "react-hot-toast";

import { BrowserRouter, Routes, Route } from "react-router-dom" 

function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center"/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
