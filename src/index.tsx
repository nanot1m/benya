import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Page } from "./components/Page";
import { Card } from "./components/Card";
import { CardTitle } from "./components/CardTitle";
import { CardList } from "./components/CardList";

function App() {
  return (
    <Page>
      <CardList>
        <Card>
          <div
            style={{
              width: 228,
              height: 358,
              paddingTop: 38,
              paddingLeft: 32
            }}
          >
            <CardTitle>HRTBT</CardTitle>
          </div>
        </Card>
        <Card>
          <div
            style={{
              width: 228,
              height: 358,
              paddingTop: 38,
              paddingLeft: 32
            }}
          >
            <CardTitle>BELLK</CardTitle>
          </div>
        </Card>
        <Card>
          <div
            style={{
              width: 228,
              height: 358,
              paddingTop: 38,
              paddingLeft: 32
            }}
          >
            <CardTitle>JERKN</CardTitle>
          </div>
        </Card>
      </CardList>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
