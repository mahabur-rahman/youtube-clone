import React, { useState } from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// react router
import { Switch, Route } from "react-router-dom";
// custom scss
import "./global.scss";
// components
import { Header, Sidebar, Main, Watch, PreviewChannel } from "./components";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header showSidebar={showSidebar} />
          <div className="d-flex">
            <Sidebar sidebar={sidebar} />
            <Main />
          </div>
        </Route>

        <Route path="/watch">
          <Header />
          <Watch />
        </Route>

        <Route path="/preview-channel">
          <div className="d-flex">
            <Header showSidebar={showSidebar} />
            <Sidebar sidebar={sidebar} extraWidth />
          </div>
          <PreviewChannel />
        </Route>
      </Switch>
    </>
  );
};

export default App;
