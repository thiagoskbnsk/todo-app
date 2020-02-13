import React from "react";

function If({ condition, children }) {
  return condition ? <>{children}</> : null;
}

export default If;
