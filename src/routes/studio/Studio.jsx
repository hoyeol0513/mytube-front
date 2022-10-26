import React from "react";
import { Route, Routes } from "react-router-dom";
import Channel from "./Channel";

const Studio = () => {
  return (
    // studio의 서브라우팅 (/studio/channel/~~)
    <Routes>
      <Route path="/channel/:id" element={<Channel />}></Route>
    </Routes>
  );
};

export default Studio;
