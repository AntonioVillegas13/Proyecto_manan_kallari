import React, { useEffect, useRef, useState } from "react";
import style from "./css/style.module.css";
import { AiOutlineCaretDown as OpenButton } from "react-icons/ai";
import { Alert, CrudButton, Transition } from "../../imports";
import { COLORS } from "../theme/theme";
import { GoAlert as AlertIcon } from "react-icons/go";

export default function Dropbutton({ title, list }) {
  const [open, setOpen] = useState(false);
  const [weight, setWeight] = useState();

  useEffect(() => {
    let counter = 0;
    list?.map((item) => {
      counter += item.weight;
    });
    setWeight(counter);
  }, [list]);

  return (
    <div>
      <div
        className={`${style.header} ${style.row}`}
        onClick={() => setOpen(!open)}
      >
        <div>
          {title}
          <OpenButton
            style={{ margin: "0px 10px" }}
            className={open ? style.down : style.up}
          />
        </div>
        <div className={style.icon_group}>
          <label>
            {weight != 100 && (
              <Alert
                message={"El procentaje total de la variable debe ser 100 %"}
                direction={"left"}
                tooltip
              >
                <span>
                  <AlertIcon size={20} style={{ marginTop: "-6%" }} />
                  &nbsp;
                </span>
              </Alert>
            )}
            {weight}%&nbsp;
          </label>
          <CrudButton background={COLORS.MODERNA_YELLOW} size={30} edit />
          <CrudButton background={COLORS.MODERNA_YELLOW} size={30} del />
          <input
            onClick={(e) => {
              e.stopPropagation();
              console.log("eliminar");
            }}
            type="checkbox"
            className={style.checkbox}
          />
        </div>
      </div>
      <Transition activator={open} disabled>
        {list?.map((item, id) => {
          return (
            <div key={id} className={`${style.item} ${style.row}`}>
              <div> {item.name}</div>
              <div className={style.icon_group}>
                <label>{item.weight}%&nbsp;</label>
                <CrudButton
                  background={COLORS.MODERNA_YELLOW}
                  size={30}
                  edit
                  color={"white"}
                />
                <CrudButton
                  background={COLORS.MODERNA_YELLOW}
                  size={30}
                  del
                  color={"white"}
                />
              </div>
            </div>
          );
        })}
      </Transition>
    </div>
  );
}
