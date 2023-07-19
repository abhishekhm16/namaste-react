import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>This page is not there 👽</h1>
      <p>
        {error.status}:{error.statusText}
      </p>
    </div>
  );
}

export default ErrorPage;
