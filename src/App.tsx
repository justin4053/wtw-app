import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import { Home } from "./pages/home/Home"
import Detail from "./pages/detail/Detail"
import Test from "./pages/test/Test"
import Menu from "./components/menu/Menu"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu position={"bottom"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
