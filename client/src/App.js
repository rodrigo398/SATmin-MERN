import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Files from './components/file/Files';
import File from './components/file/File';
import CreateFile from './components/file-forms/CreateFile';
import CreateProvision from './components/provision/ProvisionForm';
import CanonDescription from './components/canon/CanonDescription';
import Provisions from './components/provision/Provisions';
import CanonRequest from './components/canon/canon-form/CanonRequest';
import CanonRequests from './components/canon/CanonRequest';
import CanonRequested from './components/canon/CanonRequested';
import CanonTicketRequested from './components/canon/CanonTicketRequested';
import ProvisionsByFile from './components/provision/ProvisionsByFile';
import Roadmap from './components/roadmap-forms/CreateRoadmap';
import RoadmapRequests from './components/roadmap/RoadmapRequest';
import ProductionRequest from './components/production-sheet/production-sheet-form/ProductionRequest';
import PrivateRoute from './components/routing/PrivateRoute';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/create-file' component={CreateFile} />
              <PrivateRoute exact path='/files' component={Files} />
              <PrivateRoute exact path='/file/:id' component={File} />
              <PrivateRoute
                exact
                path='/create-provision/:id'
                component={CreateProvision}
              />
              <PrivateRoute exact path='/provisions' component={Provisions} />
              <PrivateRoute
                exact
                path='/provisions/:id'
                component={ProvisionsByFile}
              />
              <PrivateRoute
                exact
                path='/canon-request/:id'
                component={CanonRequest}
              />
              <PrivateRoute
                exact
                path='/canon-requests/:id'
                component={CanonRequests}
              />
              <PrivateRoute
                exact
                path='/canon-requested'
                component={CanonRequested}
              />
              <PrivateRoute
                exact
                path='/canon-ticket-requested'
                component={CanonTicketRequested}
              />
              <PrivateRoute
                exact
                path='/canon-description/:id'
                component={CanonDescription}
              />
              <PrivateRoute
                exact
                path='/roadmap-request/:id'
                component={Roadmap}
              />
              <PrivateRoute
                exact
                path='/roadmap-requests/:id'
                component={RoadmapRequests}
              />
              <PrivateRoute
                exact
                path='/production-requests/:id'
                component={ProductionRequest}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
