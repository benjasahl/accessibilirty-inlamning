import './App.css'
import About from './views/About'
import AboutGameplay from './views/AboutGameplay'
import AboutGoal from './views/AboutGoal'
import AboutTheme from './views/AboutTheme'
import Contact from './views/Contact'
import Home from './views/Home'
import Navbar from './components/Navbar'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/gameplay' component={AboutGameplay} />
          <Route path='/goal' component={AboutGoal} />
          <Route path='/theme' component={AboutTheme} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
