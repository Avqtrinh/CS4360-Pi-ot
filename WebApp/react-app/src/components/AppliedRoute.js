import React from "react";
import { Route } from "react-router-dom";

//https://stackoverflow.com/questions/48497510/simple-conditional-routing-in-reactjs
export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;
