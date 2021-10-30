import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AsyncAwait from "./AsyncAwait";
import ButtonClick from "./ButtonClick";
import ErrorAsyncAwait from "./ErrorAsyncAwait";
import ErrorThen from "./ErrorThen";
import LoadingText from "./LoadingText";
import PassParam from "./PassParam";
import SearchUser from "./SearchUser";
import UsingAxios from "./UsingAxios";
import UsingCustomHook from "./UsingCustomHook";
import UsingFetch from "./UsingFetch";
import UsingHoc from "./UsingHoc";
import UsingRenderProps from "./UsingRenderProps";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/using-fetch">Using Fetch</Link>
              </li>
              <li>
                <Link to="/async-await">Async Await</Link>
              </li>
              <li>
                <Link to="/button-click">Button Click</Link>
              </li>
              <li>
                <Link to="/pass-param">Pass Param</Link>
              </li>
              <li>
                <Link to="/search-user">Search User</Link>
              </li>
              <li>
                <Link to="/loading-text">Loading Text</Link>
              </li>
              <li>
                <Link to="/error-then">Error Handling (then)</Link>
              </li>
              <li>
                <Link to="/error-async-await">Error Async-Await</Link>
              </li>
              <li>
                <Link to="/using-axios">Using Axios</Link>
              </li>
              <li>
                <Link to="/using-hoc">Using Hoc</Link>
              </li>
              <li>
                <Link to="/using-custom-hook">Using Custom Hook</Link>
              </li>
              <li>
                <Link to="/using-render-props">Using Render Props</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Switch>
              <Route path="/using-fetch">
                <UsingFetch />
              </Route>
              <Route path="/async-await">
                <AsyncAwait />
              </Route>
              <Route path="/button-click">
                <ButtonClick />
              </Route>
              <Route path="/pass-param">
                <PassParam />
              </Route>
              <Route path="/search-user">
                <SearchUser />
              </Route>
              <Route path="/loading-text">
                <LoadingText />
              </Route>
              <Route path="/error-then">
                <ErrorThen />
              </Route>
              <Route path="/error-async-await">
                <ErrorAsyncAwait />
              </Route>
              <Route path="/using-axios">
                <UsingAxios />
              </Route>
              <Route path="/using-hoc">
                <UsingHoc />
              </Route>
              <Route path="/using-custom-hook">
                <UsingCustomHook />
              </Route>
              <Route path="/using-render-props">
                <UsingRenderProps />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
