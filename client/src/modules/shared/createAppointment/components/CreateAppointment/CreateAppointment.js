import { lazy, Suspense } from "react";
import { AppLayout, Loading } from "shared";

const CreateAppointmentRoutes = lazy(() => import("./CreateAppointmentRoutes"));
const { Feature } = AppLayout;
const { Right, Main, Left } = Feature;

function CreateAppointment() {
  return (
    <>
      <Left></Left>
      <Main>
        <Suspense fallback={<Loading width={72} />}>
          <CreateAppointmentRoutes />
        </Suspense>
      </Main>
      <Right></Right>
    </>
  );
}

export default CreateAppointment;
