import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from '../pages/calculator';
import MathMagicians from '../pages/mathmagicians';
import Quote from '../pages/quote';
import Header from '../pages/navbar';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={MathMagicians} />
      <Route exact path="/calculate" component={Calculator} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
