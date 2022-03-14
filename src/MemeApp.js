import React from "react";
import { Header } from "./components/Header/Header";
import { MemeForm } from "./components/MemeForm/MemeForm";

export const MemeApp = () => {
  return (
    <div>
      <Header />
      <MemeForm />
    </div>
  );
};
