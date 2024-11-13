// import{
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";

// import Add from "./sqlpages/Add";
// // import BookPage from "./sqlpages/BookPage";
// import BookPage from "./sql/sqlpages/BookPage";  // Make sure this path is correct

// import Update from "./sqlpages/Update";

// function App(){
//     return (
//         <div className="App">
//           <BrowserRouter>
//             <Routes>
//                 <Route path="/bookpage" element={<BookPage />} /> 
//                 <Route path="/add" element={<Add />} /> 
//                 <Route path="/update/:id" element={<Update />} /> 
//             </Routes>
//           </BrowserRouter> 
//         </div>
//     );
// }

// export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Add from "./sqlpages/Add";
import BookPage from "./sqlpages/BookPage";
import Update from "./sqlpages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/bookpage" element={<BookPage />} />  {/* Ensure this path is correct */}
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
