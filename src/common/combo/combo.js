import React, { useEffect, useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { AiOutlineCaretDown as OpenButton } from "react-icons/ai";

import style from "./css/style.module.css";
import { useSearchParams } from "react-router-dom";

export default function Combo({
  pathvariable,
  options,
  onSelect,
  title,
  filter,
  right,
  gray,
}) {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (pathvariable) {
      const parameter = searchParams.get(pathvariable);
      if (options && parameter != null) {
        if (options.find((e) => e === parameter)) {
          handleSelect(parameter);
        } else {
          {
            setError(
              `${
                title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()
              } ${parameter.toUpperCase()} no válido`
            );
          }
        }
      }
    }
  }, [searchParams]);

  const handleSelect = (e) => {
    setError();
    setSelected(e);
    if (onSelect) {
      onSelect(e);
    }
  };
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      className={`${style.dropdown} ${gray ? style.gray : style.primary}`}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <a>{children}</a>
      <div>
        <OpenButton />
        {right}
      </div>
    </div>
  ));
  return (
    <div className={style.container}>
      <Form.Floating>
        <Dropdown onSelect={handleSelect} className={style.container}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            as={CustomToggle}
            style={`${gray ? style.gray : style.primary}`}
          >
            {selected ? selected : title}
          </Dropdown.Toggle>
          <Dropdown.Menu as={filter && CustomMenu}>
            <Dropdown.Item eventKey={null} disabled key={-1}>
              {title}
            </Dropdown.Item>
            {options?.map((option, id) => (
              <Dropdown.Item eventKey={option} key={id}>
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <label
          style={{ margin: "-2rem -10px" }}
          htmlFor="floatingPasswordCustom"
        >
          {selected && title}
        </label>
        <label
          className="text-danger"
          style={{ top: "+55%" }}
          htmlFor="floatingPasswordCustom"
        >
          {error}
        </label>
      </Form.Floating>
    </div>
  );
}

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Buscar..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
