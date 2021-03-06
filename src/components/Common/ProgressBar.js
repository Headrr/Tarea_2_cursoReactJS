import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProgressBar = () => (
  <div className="progressBar" style={{alignSelf: 'center'}}>
    <CircularProgress size={ 100 } />
  </div>
);

export default ProgressBar;
