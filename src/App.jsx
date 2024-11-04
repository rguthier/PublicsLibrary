
import Navbar from "./components copy/navbar/Navbar"
import BookList from "./pages/BookList"
import FeaturedBooks from "./pages/FeaturedBooks"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Showcase from "./pages/Showcase"
import Testimonials from "./pages/Testimonials"



const App = () => {
  return (
    <div className='nav-container'>
    
       <Navbar />
       <Hero /> 
       <Showcase />
       <FeaturedBooks/>
       <BookList/>
       <Testimonials />
       <Footer /> 
       
    </div>
    
  )
}

export default App




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import BrowseBooks from './pages/BrowseBooks';
// import MyLibrary from './pages/MyLibrary';
// import TradeRequests from './pages/TradeRequests';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/browse" element={<BrowseBooks />} />
//         <Route path="/library" element={<MyLibrary />} />
//         <Route path="/trades" element={<TradeRequests />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;



// const App = () => { 
//   return  (
//     <div className="login-container">
//       <h2 className="form-title"> Login </h2>
//       <div className="social-login"> 
//         <button className="social-button"> 
//           <img src="./public/google.svg" alt="Google" className="social-icon" /> 
//           Google
//         </button>
//         <button className="social-button"> 
//           <img src="apple.svg" alt="Apple" className="social-icon" /> 
//           Apple
//         </button>
//       </div>
//       <p className="seperator"><span>or</span></p>
        
//       <form action="#" className="login-form"> 
//         <div className="input-wrapper"> 
//           <input type="email" placeholder="Email address" className="input-field" required /> 
//           <i class="material-symbols-rounded"></i>
//         </div>

//         <div className="input-wrapper"> 
//           <input type="password" placeholder="Password" className="input-field" required /> 
//           <i class="material-symbols-rounded">lock</i>
//         </div>
//         <a href="#" className="forgot-pass-link">Forgot Password?</a>
//         <button className="login-button">Log in</button>
//       </form>

//       <p className="signup-text">Don't have an account? <a href="#">SignUp now</a></p>
//     </div>
//   )
// }

// export default App



