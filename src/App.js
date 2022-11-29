import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Home"
import Main from "./Components/Main"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App
