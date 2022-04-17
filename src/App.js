import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import NotFound from "./Components/NotFound/NotFound";
import Registration from "./Components/Registration/Registration";
import Checkout from './Components/Checkout/Checkout';
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path='/services/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
