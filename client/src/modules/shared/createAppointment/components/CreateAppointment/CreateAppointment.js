import { lazy, Suspense } from "react";
import { AppLayout, Loading } from "shared";

const CreateAppointmentRoutes = lazy(() => import("./CreateAppointmentRoutes"));
const { Feature } = AppLayout;
const { Main } = Feature;

function CreateAppointment() {
  return (
    <>
      <Main>
        <Suspense fallback={<Loading width={72} />}>
          <CreateAppointmentRoutes />
        </Suspense>
      </Main>
    </>
  );
}

export default CreateAppointment;
