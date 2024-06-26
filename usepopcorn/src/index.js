import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StaringRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movies was rating {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terriable", "Bad", "Okay", "Good", "Amazing"]}
      onSetRating={() => {}}
    /> */}
    {/* <StarRating size={20} color="red" className="test" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
