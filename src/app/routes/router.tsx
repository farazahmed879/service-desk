import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ServicesPage from "../utilities-services/page";
import PassportPage from "../passport/page";
import CNICPage from "../cnic/page";
import BformPage from "../b-form/page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ServicesPage />} />

      <Route path="/passport" element={<PassportPage />} />

      <Route path="/passport/new-passport" element={<PassportPage />} />
      <Route path="/passport/renew-passport" element={<PassportPage />} />
      <Route path="/passport/lost-passport" element={<PassportPage />} />

      <Route path="/cnic" element={<CNICPage />} />
      <Route path="/cnic/new-Cnic" element={<CNICPage />} />
      <Route path="/cnic/renew-Cnic" element={<CNICPage />} />
      <Route path="/cnic/lost-Cnic" element={<CNICPage />} />

      <Route path="/B-Form" element={<BformPage />} />
      <Route path="/B-Form/newB-Form" element={<BformPage />} />
      <Route path="/B-Form/renewBForm" element={<BformPage />} />
      <Route path="/B-Form/lost-BForm" element={<BformPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
