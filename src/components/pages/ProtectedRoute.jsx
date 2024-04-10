import React from 'react'
import { Route, redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, autorizado, ...rest }) => (

    <Route
      {...rest}
      render={(props) =>
        autorizado ? (
          <Component {...props} />
        ) : (
            redirect("/")
        )
      }
    />
  );

export default ProtectedRoute