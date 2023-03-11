import { compose } from "../../shared/lib/compose";
import { withAuth } from "./auth";
import { withRouter } from "./with-router";

export const withProviders = compose(withRouter, withAuth);
