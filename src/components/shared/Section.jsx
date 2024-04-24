import React from "react";

export default function Section({ styling, children }) {
  return (
    <section className={`flex p-24 w-full ${styling}`}>{children}</section>
  );
}
