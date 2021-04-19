import React, { useState, useEffect } from "react";
import Feed from "./Feed";

const Binder = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: 200,
          backgroundColor: "gold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        This is the Binder
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "tomato",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        This is the Binder 1
        <Feed />
      </div>
      <div
        style={{
          width: 200,
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
        }}
      >
        This is the Binder 2
      </div>
    </div>
  );
};

export default Binder;
