import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { Provider } from 'react-redux';
import store from '../redux/store';
import routeList from './routeList';
import RouterLayout from './RouterLayout';
import { GlobalLoader } from '../helper/commonService/index';

const Routing = () => {
  const history = createHistory();
  const loader = GlobalLoader();
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={loader}>
          <Switch>
            {routeList.map(({ component: Component, ...rest }, index) => (
              <Route {...rest} key={index}>
                <RouterLayout>
                  <Component />
                </RouterLayout>
              </Route>
            ))}
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
};
export default Routing;
