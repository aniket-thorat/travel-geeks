import Navbar from "./components/Header/Header";
import SignupForm from './components/User/SignupForm';
import MainScreen from './components/MainScreen/MainScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/User/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ExploreCity from "./components/ExploreCity/ExploreCity";
import AddExperience from "./components/AddExperience/AddExperience";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route exact path= "/" element={<MainScreen/>}/>
             <Route exact path="/home" element={<Home />} />
            <Route exact path= "/signup" element={<SignupForm />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path = '/explore/:name' element={<ExploreCity/>}/>
            <Route exact path = '/add-experience' element={<AddExperience/>}/>
          </Routes>
        </main>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
