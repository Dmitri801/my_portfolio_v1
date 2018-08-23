import React from "react";
import { Spring } from "react-spring";
const Test = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {styles => <div style={styles}>i will fade in</div>}
    </Spring>
  );
};

export default Test;
