import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import RequireAuth from "../modules/RequireAuth";

const AuthPage = lazy(() => import("./auth/AuthPage"));
const NoMatchPage = lazy(() => import("./noMatch/NoMatchPage"));

export const Routing = () => {
  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <BaseLayout>
            <AuthPage />
          </BaseLayout>
        }
      />
      <Route
        path="*"
        element={
          <RequireAuth>
            <NoMatchPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
