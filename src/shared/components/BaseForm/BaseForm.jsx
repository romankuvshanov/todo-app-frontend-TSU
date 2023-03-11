import React from "react";

export default function BaseForm({ onSubmit, children, ...props }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
