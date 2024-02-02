import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Tabs from "layouts/tabs";
import Index from "layouts/xyz";
import Try from "layouts/xyz";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="tabs" element={<Tabs />} />
      <Route path="xyz" element={<Try />} />
    </Routes>
  );
};

export default App;
