import React from "react";
import { Button } from "react-bootstrap";
import _style from "./css/style.module.css";
import { COLORS } from "../../theme/theme";

export default function ModernaButton({
  children,
  loading,
  secondary,
  color,
  className,
  ...restOfProps
}) {
  const setColor = () => {
    if (secondary) {
      return COLORS.MODERNA_YELLOW;
    }
    if (color) {
      return color;
    }
    return COLORS.MODERNA_RED;
  };

  return (
    <Button
      style={{ backgroundColor: setColor() }}
      className={[_style.btn, className]}
      {...restOfProps}
    >
      {children}
    </Button>
  );
}
