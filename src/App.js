
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//layout
import Header from './shared/Header';
import Footer from "./shared/Footer";

//components - products
//import Products from './components/Products';
// import NewProduct from './components/NewProduct';
// import EditProduct from './components/EditProduct';

//components - home
import Home from './components/Home';

// Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';

function App() {
  return (
    <Router>
      <Header/>
      <Provider store={store}>
        <div className="flex">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/products" component={Products} /> */}
              {/* <Route exact path="/product/new" component={Products} />
              <Route exact path="/product/edit/:id" component={Products} /> */}
            </Switch>
          </div>
        </div>
      </Provider>
      <Footer/>
    </Router>
  );
}

export default App;
