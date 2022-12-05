export const pattern = "/1";
export const dropdowns = [
  {
    title: "Heading 1",
    value: "heading1",
    description: "Shortcut: type # + space",
  },
  {
    title: "Expandable Heading 1",
    value: "expandableHeading1",
    description: "Shortcut: type >># + space",
  },
];

export const getStylePlaceholder = (type) => {
  switch (type) {
    case "heading1":
      return {
        style: {
          fontSize: "2rem",
          fontWeight: 800,
          lineHeight: "2.5rem",
          padding: "1.5rem 0",
        },
        placeholder: "Heading 1",
      };
    case "paragraph":
      return {
        style: {
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: "1.25rem",
          color: "rgb(103, 104, 105)",
          padding: "1rem 0",
        },
        placeholder: "Type / for blocks, @ to link docs or people",
      };
    default:
      return {
        style: { fontSize: "1rem", fontWeight: 400, lineHeight: "1.25rem" },
        placeholder: "Type / for blocks, @ to link docs or people",
      };
  }
};
