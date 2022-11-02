import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Error, Landing, Register, ProtectedRoute } from "./pages/Index";
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard/Index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="stats" element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="add-job" element={<AddJob />}></Route>
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
