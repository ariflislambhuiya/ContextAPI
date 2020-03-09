import React, { Component } from "react";

import BasicNav from "./basic_nav";
import Showcase from "./showcase";
import { UserProvider, UserConsumer } from "./userContext";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="container">
          <div className="row">
            <UserConsumer>
              {({ isAuthonticated }) => (
                <div className="col-sm-6 offset-sm-3">
                  <h1 className="my-2">Context API Course</h1>
                  <hr />
                  <BasicNav />
                  <hr />
                  {isAuthonticated && <Showcase />}
                </div>
              )}
            </UserConsumer>
          </div>
        </div>
      </UserProvider>
    );
  }
}

export default App;
