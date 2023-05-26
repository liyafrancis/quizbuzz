import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import Samplelogin from './LoginPage'
import LoginPage from './LoginPage'
import Login from './Login';
import Signup from './Signup';
import SignInOutContainer from './containers';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import Topbar from './components/Topbar';
import Quizpage from './pages/Quizpage';
import Newbar from './components/NewBar';
import QuizList from './pages/Quizlist';


// function App() {
  // return (
    // <div className="App">
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
       {/* <SignInOutContainer></SignInOutContainer>  */}
    // </div>
  // );
// }
const App = () => {
  return (
    <BrowserRouter>
       <Sidebar>
        {/* <Topbar/> */}
         <Routes> 
          <Route path="/" element={<Dashboard />} /> 
           <Route path="/dashboard" element={<Dashboard />} /> 
           <Route path="/profile" element={<Profile />} /> 
           <Route path="/attendquiz" element={<Quizpage/>}> 
           </Route> 
         </Routes> 
       </Sidebar> 
    </BrowserRouter>
  );
};

export default App;

