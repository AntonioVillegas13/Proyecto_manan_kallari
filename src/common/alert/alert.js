import React from "react";
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap";

export default function Alert({
  children,
  title,
  message,
  direction,
  tooltip,
}) {
  const tooltipover = (
    <Tooltip id="tooltip-disabled">{message ? message : title}</Tooltip>
  );

  const popover = (
    <Popover id="popover-basic">
      {title && <Popover.Header as="h3">{title}</Popover.Header>}
      {message && <Popover.Body>{message}</Popover.Body>}
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement={direction ? direction : "right"}
      overlay={tooltip ? tooltipover : popover}
    >
      {children}
    </OverlayTrigger>
  );
}
