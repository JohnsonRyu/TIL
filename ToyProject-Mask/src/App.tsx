import React from "react";
import { Provider } from "mobx-react";
import { Route, BrowserRouter } from "react-router-dom";

import { rootStore } from "./store";
import { MainPage } from "./pages";

const App = () => (
  <BrowserRouter>
    <Provider {...rootStore}>
      <Route exact path="/" component={MainPage} />
    </Provider>
  </BrowserRouter>
);

export default App;
