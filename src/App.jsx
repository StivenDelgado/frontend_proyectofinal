import { Routes, Route } from "react-router";
import { Home } from "./presentation/view/Home";
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
