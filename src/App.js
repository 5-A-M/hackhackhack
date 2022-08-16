import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import IntoExchange from "./Components/Home/Component/IntoExchange/IntoExchange"
import HomeIndex from "./Components/Home/HomeIndex"
import Room from "./Components/Room/Room"

const App= (props)=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/lobby" element={<IntoExchange />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </Router>
  )
}

export default App