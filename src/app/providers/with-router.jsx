import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Spinner from "../../shared/components/Spinner";

export const withRouter = (component) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
    </BrowserRouter>
  );
