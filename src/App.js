import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import AddStudent from './components/students/AddStudent'
import EditStudent from './components/students/EditStudent'
import Student from './components/students/Student'
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound';

function App() {
  
  return (
    <Router>
      <div >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/students/add" component={AddStudent}/>
          <Route exact path="/students/edit/:id" component={EditStudent}/>
          <Route exact path="/students/:id" component={Student}/>

          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
