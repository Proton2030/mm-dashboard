import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Tabs from "layouts/tabs";
import JobInfo from "layouts/jobinfo";
import EducationInfo from "layouts/education";
import ReligiousInfo from "layouts/religiousinfo";
import PersonalInfo from "layouts/personalinfo";
import FamilyInfo from "layouts/familyinfo";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="tabs/:ph" element={<Tabs />} />
      <Route path="personalinfo" element={<PersonalInfo />} />
      <Route path="jobinfo" element={<JobInfo />} />
      <Route path="education" element={<EducationInfo />} />
      <Route path="religiousinfo" element={<ReligiousInfo />} />
      <Route path="familyinfo" element={<FamilyInfo/>} />
      
      
    </Routes>
    
  );
};

export default App
