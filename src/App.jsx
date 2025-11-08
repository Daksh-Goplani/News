import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"

function App() {
  const [category, setCategory] = useState('general')

  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category} />
    </>
  )
}

export default App


// 28e2003070a44109bad92bd9191d1b9e