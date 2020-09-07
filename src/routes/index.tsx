import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Dashboard} />
        <Route path="/signin" component={SignIn} />
      </BrowserRouter>
    </>
  );
};

export default Routes;
