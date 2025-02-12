import { Routes, Route } from "react-router";
import { Home } from "./presentation/view/Home";
import { Login } from "./presentation/view/Login";
import Register from "./presentation/view/Register";
import PasswordRecovery from "./presentation/view/PasswordRecovery";
import { ChatBot } from "./presentation/view/ChatBot";
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<PasswordRecovery />}/>
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/home" element={<Home />} />
        <Route path="/metas" element={<Metas />} />
      </Routes>
    </>
  )
}

export default App
