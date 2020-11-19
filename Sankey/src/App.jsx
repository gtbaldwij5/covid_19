/* eslint-disable */

import React from "react";

// import District from "views/District/District.jsx";
// import Guidelines from "views/Guidelines/Guidelines.jsx";
import SankeyWrap from "views/Sankey/Sankey.jsx";

import "app.css";

function App(props) {
  return (
    <div style={{
      // height: '100%',
      height: '99vh',
      width: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <SankeyWrap />
    </div>
  );
}

export default App;
