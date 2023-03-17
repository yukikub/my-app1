import { Component } from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Topnavbar from './components/Topnavbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Topnavbar/>
        <div className='container'></div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
