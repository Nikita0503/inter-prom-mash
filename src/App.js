import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/about/About';
import { Products } from './pages/products/Products';
import { Contacts } from './pages/contacts/Contacts';
import { Feedback } from './pages/feedback/Feedback';
import './App.css'
function App() {
  return (
    <BrowserRouter>
        <div className="container">
        <Navbar/>
          <Switch>
            <Route path={'/'} exact component={About}/>     
            <Route path={'/products'} component={Products}/>    
            <Route path={'/contacts'} component={Contacts}/>
            <Route path={'/feedback'} component={Feedback}/> 
          </Switch>
        </div>
    </BrowserRouter>
  );
}



export default App;
