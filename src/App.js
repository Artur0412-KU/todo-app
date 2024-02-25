import './scss/App.scss';
import InputComponent from './components/InputComponent';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Spin } from 'antd';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const ErrorPage = lazy(() => import('./components/error/ErrorPage'));
const Layout = lazy(() => import('./components/Layout'));

function App() {
  return (
    <Router>
      <div className="App">        
        <main>
          <Suspense fallback = {<Spin />}>
             <Routes>
              <Route path='/' element = {<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/todo' element = {<InputComponent/>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='*' element = {<Navigate to='/404' />}/>
                <Route path='/404' element = {<ErrorPage/>}/>
             </Route>
            </Routes>
          </Suspense>          
        </main>
      </div> 
    </Router>
  );
}

export default App;
