import React, { useState, useRef } from "react";
import { RxText } from "react-icons/rx";
import { v4 as uuidv4 } from "uuid";
import { FiMenu } from "react-icons/fi";

const pattern = "/1";
const dropdowns = [
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

const getStylePlaceholder = (type) => {
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

const EditorElement = ({
  focusedDOMId,
  generateBlock,
  id,
  indexValue,
  onChangeBlock,
  setFocusedDOMId,
  content,
  type = "paragraph",
}) => {
  const [matchedHeaderPattern, setMatchedHeaderPattern] = useState(false);
  const { placeholder, style } = getStylePlaceholder(type);

  const handleChange = (e) => {
    const value = e.currentTarget.textContent;
    if (pattern === value) {
      setMatchedHeaderPattern(true);
    } else {
      setMatchedHeaderPattern(false);
    }
  };

  const handleKeyPress = (e) => {
    const value = e.currentTarget.textContent;
    if (e.key === "Enter") {
      const newBlockId = uuidv4();
      setFocusedDOMId(newBlockId);
      generateBlock(
        indexValue,
        {
          content: "",
          type: "paragraph",
          id: newBlockId,
        },
        {
          content: value,
          id,
          type,
        }
      );
      e.preventDefault();
    }
  };

  const handleBlockSelect = (type) => {
    const newId = uuidv4();
    const updatedData = {
      id: newId,
      type,
      content: "",
    };
    const { style } = getStylePlaceholder(type);
    setMatchedHeaderPattern(false);
    setFocusedDOMId(newId);
    onChangeBlock({ index: indexValue, style, updatedData });
  };

  return (
    <div className="main-editor">
      <FiMenu
        fontSize="24px"
        color="rgb(103, 104, 105)"
        id="placeholder-icon"
      />
      <div
        id={id}
        placeholder={placeholder}
        style={style}
        onInput={handleChange}
        onKeyDown={handleKeyPress}
        contentEditable
        onFocus={() => {
          setFocusedDOMId(id);
        }}
        className={"block-editor"}
      >
        {content}
      </div>
      {matchedHeaderPattern && id === focusedDOMId && (
        <div className="dropdown">
          <h3 className="dropdown__header">Add Blocks</h3>
          <p className="dropdown__description">
            Keep typing to filter, or escape to exit
          </p>
          <div className="dropdown__filter">
            Filtering Keyword <span className="dropdown__filter-text">1</span>
          </div>
          <ul className="dropdown-list">
            {dropdowns.map((item, index) => (
              <li
                className="dropdown-item"
                key={index}
                onClick={() => handleBlockSelect("heading1")}
              >
                <RxText fontSize="4rem" color="rgb(158, 160, 162)" />
                <div>
                  <div className="dropdown-item__header">{item.title}</div>
                  <p className="dropdown-item__description">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EditorElement;
