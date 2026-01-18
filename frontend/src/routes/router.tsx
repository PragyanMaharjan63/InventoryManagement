import Login from "@/pages/login";
import { Routes, Route } from "react-router-dom";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
