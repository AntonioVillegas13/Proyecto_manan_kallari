import React from "react";
import { DropButton } from "../../../../imports";

export default function DropdownVariable({ variables }) {
  {
    return (
      <div>
        {variables?.map((variable, id) => {
          return (
            <DropButton
              title={variable.name}
              list={variable.subvariables}
              key={id}
            />
          );
        })}
      </div>
    );
  }
}
