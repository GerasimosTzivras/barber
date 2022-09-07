import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { AppLayout, Footer, Header, Loading } from "./shared";

const CreateAppointment = lazy(() =>
  import("modules/shared/createAppointment")
);

function Features() {
  return (
    <Routes>
      <Route path="/" element={<CreateAppointment />} />
    </Routes>
  );
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <AppLayout>
          <AppLayout.Header>
            <Header />
          </AppLayout.Header>
          <AppLayout.Feature>
            <Features />
          </AppLayout.Feature>
          <AppLayout.Footer>
            <Footer />
          </AppLayout.Footer>
        </AppLayout>
      </BrowserRouter>
      <Toaster containerStyle={{ top: 50 }} />
    </Suspense>
  );
}

export default App;
