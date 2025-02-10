import { Routes, Route } from "react-router";
import { Home } from "./presentation/view/Home";
import { Login } from "./presentation/view/Login";
import Register from "./presentation/view/Register";
import { Expenses } from "./presentation/view/expenses";
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  )
}

export default App
