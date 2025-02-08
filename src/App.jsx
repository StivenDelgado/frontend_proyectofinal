import { Routes, Route } from "react-router";
import { Home } from "./presentation/view/Home";
import { Login } from "./presentation/view/Login";
import Register from "./presentation/view/Register";
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
