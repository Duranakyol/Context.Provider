import React from "react";
import Button from "./Button";
import Header from "./Header";

import { useTheme } from "../Context/ThemeContext";
import Profile from "./Profile";

function Container() {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className={`App ${theme}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;
