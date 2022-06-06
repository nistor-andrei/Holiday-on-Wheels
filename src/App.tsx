import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Rent } from "./pages";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
