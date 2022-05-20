import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";


const App = () => {
  return (
    <StrictMode>
        <BrowserRouter>
        <header>Hello there!</header>
          <Routes>
            {/* <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} /> */}
          </Routes>
        </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
