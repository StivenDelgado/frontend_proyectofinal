import { Routes, Route } from "react-router";
import { Home } from "./presentation/view/Home";
import { Login } from "./presentation/view/Login";
import Register from "./presentation/view/Register";
import { Expenses } from "./presentation/view/Expenses";
import PasswordRecovery from "./presentation/view/PasswordRecovery";
import { ChatBot } from "./presentation/view/ChatBot";
import Goals from "./presentation/view/Goals";
import { NewPassword } from "./presentation/view/NewPassword";
import { Toaster } from "sonner";
function App() {

  return (
    <>
    <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/recovery" element={<PasswordRecovery />}/>
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/home" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
    </>
  )
}

export default App
