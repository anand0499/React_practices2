
// import Form from "./Components/Form";
// import MoviesList from "./Components/MoviesList";
// import UseReducers from "./Components/UseReducers";


// function App() {


//   return (
//    <div>
//    <Form />
//     <MoviesList/>
//    </div>
//   );
// }

// export default App;

import React from 'react'
import Header from './Components2/Header'
import Home from "./Components2/Home"
import Cart from "./Components2/Cart"
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' exact element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default App