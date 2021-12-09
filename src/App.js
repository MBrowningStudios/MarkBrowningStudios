/** @format */
// react Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import './css/App.css';

// // Routes
import Home from './routes/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/*  <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/gallery/:galleryName">
          <Gallery />
        </Route>
        <Route path="*">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
