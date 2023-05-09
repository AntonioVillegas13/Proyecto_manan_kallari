const VARIABLES = [
  {
    name: "Portfolio",
    clientType: "ASI",
    subvariables: [
      {
        name: "Ideal Portfolio",
        weight: 20,
      },
      {
        name: "Madantory Portfolio",
        weight: 20,
      },
    ],
  },
  {
    name: "Portfolio",
    clientType: "MAYORISTA",
    subvariables: [
      {
        name: "Ideal Portfolio",
        weight: 50,
      },
      {
        name: "Madantory Portfolio",
        weight: 20,
      },
    ],
  },
  {
    name: "Price",
    clientType: "MAYORISTA",
    subvariables: [
      {
        name: "Ideal Price",
        weight: 20,
      },
      {
        name: "Madantory Price",
        weight: 20,
      },
    ],
  },
  {
    name: "Price",
    clientType: "ASI",
    subvariables: [
      {
        name: "Ideal Price",
        weight: 60,
      },
      {
        name: "Madantory Price",
        weight: 40,
      },
    ],
  },
];

export const fetchVariables = async (clientType) => {
  let response = VARIABLES;
  if (clientType) {
    response = VARIABLES.filter(
      (variable) =>
        variable.clientType.toLowerCase() === clientType.toLowerCase()
    );
  }
  return response;
};
