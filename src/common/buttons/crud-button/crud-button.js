import React, { useMemo } from "react";
import { MdDeleteForever as DeleteButton } from "react-icons/md";
import { MdEdit as EditButton } from "react-icons/md";
import { MdRemoveRedEye as ViewButton } from "react-icons/md";
import style from "./css/style.module.css";

export default function CrudButton({
  del,
  edit,
  view,
  color,
  size,
  background,
  onClick,
  padding,
}) {
  const buttonIcon = useMemo(() => {
    if (del) {
      return (
        <DeleteButton
          style={{
            backgroundColor: background,
            margin: "0px 1px",
            padding: padding ? padding : 5,
          }}
          size={size}
          color={color}
        />
      );
    }
    if (edit) {
      return (
        <EditButton
          style={{
            backgroundColor: background,
            margin: "0px 1px",
            padding: padding ? padding : 5,
          }}
          size={size}
          color={color}
        />
      );
    }
    if (view) {
      return (
        <ViewButton
          style={{
            backgroundColor: background,
            margin: "0px 1px",
            padding: padding ? padding : 5,
          }}
          size={size}
          color={color}
        />
      );
    }
  }, []);

  return (
    <div
      className={style.icon}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {buttonIcon}
    </div>
  );
}
