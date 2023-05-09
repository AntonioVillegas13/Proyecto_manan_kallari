import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./css/transitions.css";
export default function TransitionComponent({
  activator,
  children,
  onEnter,
  onExited,
  disabled,
}) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={activator}
      nodeRef={nodeRef}
      timeout={disabled ? 0 : 300}
      classNames={disabled ? "" : "transition"}
      unmountOnExit
      onEnter={(e) => {
        if (onEnter) onEnter(e);
      }}
      onExited={(e) => {
        if (onExited) onExited(e);
      }}
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}
