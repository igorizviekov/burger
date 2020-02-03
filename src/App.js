import React, { Suspense } from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";

import Spinner from "./components/UI/Spinner/Spinner";
//lazy loading
const Orders = React.lazy(() => import("./containers/Orders/Orders"));

function App(props) {
  return (
    <div>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Layout>
          <Route
            path="/orders"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <Orders />
              </Suspense>
            )}
          />
          <Route path="/bright-burger" exact component={BurgerBuilder} />
        </Layout>
      </Switch>
      <Redirect to="/bright-burger" />
    </div>
  );
}

export default App;
