import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Body from './body'
import Header from './header'
// import Add from './add'
import { themeContext } from './mode'
function App() {
  // const [count, setCount] = useState(0)
    const [mode,setMode]=useState(true)
  return (
    <>
    {/* <div className=''>hello world</div> */}
     <themeContext.Provider value={{mode,setMode}}>
    <Navbar/>
    <Header/>
    <Body/>
  </themeContext.Provider>
  {/* <productContext.Provider value={{user,setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    <ToastContainer/>
    </productContext.Provider> */}





    {/* <Add/> */}
    </>
  )
}

export default App
