import './scss/App.scss';
import InputComponent from './components/InputComponent';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/error/ErrorPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
            <Route path='/' element = {<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/todo' element = {<InputComponent/>}/>
              <Route path='/about' element = {<About/>}/>
              <Route path='*' element = {<ErrorPage />}/>
            </Route>
            

          </Routes>
        </main>
        {/* <InputComponent/> */}
      </div> 
    </Router>
  );
}

export default App;
