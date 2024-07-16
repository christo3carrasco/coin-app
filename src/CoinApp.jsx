import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CoinList, Home, User, NotFound } from "./pages";

export const CoinApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<CoinList />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
