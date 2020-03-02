import React from "react";
import { Provider } from "mobx-react";
import { Route, BrowserRouter } from "react-router-dom";

import { TestPage } from "./pages";
import { rootStore } from "./store";

const App = () => (
  <BrowserRouter>
    <Provider {...rootStore}>
      <Route exact path="/" component={TestPage} />
    </Provider>
  </BrowserRouter>
);

export default App;
