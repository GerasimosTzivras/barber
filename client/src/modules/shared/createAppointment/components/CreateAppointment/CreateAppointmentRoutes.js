import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const CreateAppointment = lazy(() =>
  import("modules/shared/createAppointment/page/CreateAppointment")
);

function CreateAppointmentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreateAppointment />} />
    </Routes>
  );
}

export default CreateAppointmentRoutes;
