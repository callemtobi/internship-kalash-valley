"use client";

// import { useState, createContext, useContext } from "react";

// export const MyContext = createContext();

export default function IntroButton({ children }) {
  //   const [data, setData] = useContext(MyContext);

  return (
    <div className="d-flex justify-content-center align-items-center my-3">
      <h2 className="p-2 fs-2 fw-bolder border-top border-start border-bottom">
        {children}
      </h2>
    </div>
  );
}
