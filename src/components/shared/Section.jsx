import React from "react";

export default function Section({ styling, children }) {
  return (
    <section className={`flex p-[5vw] w-full ${styling}`}>{children}</section>
  );
}
