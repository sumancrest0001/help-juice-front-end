import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import EditorElement from "./EditorElement";

function Editor() {
  const [textBlocks, setTextBlocks] = useState([
    {
      type: "paragraph",
      content: "",
      id: uuidv4(),
    },
  ]);
  console.log("----------------------", textBlocks);
  const [focusedDOMId, setFocusedDOMId] = useState();
  const activeElement = useRef(null);

  useEffect(() => {
    const el = document.getElementById(textBlocks[0].id);
    el.focus();
  }, []);

  useEffect(() => {
    if (focusedDOMId) {
      const el = document.getElementById(focusedDOMId);
      activeElement.current = el;
      el.focus();
    }
  }, [focusedDOMId]);

  const generateBlock = (index, newData, oldData) => {
    const oldTextBlocks = JSON.parse(JSON.stringify(textBlocks));
    oldTextBlocks[index] = oldData;
    oldTextBlocks.splice(index + 1, 0, newData);
    setTextBlocks(oldTextBlocks);
  };

  const handleBlockChange = ({ index, style, updatedData }) => {
    const prevTextBlocks = JSON.parse(JSON.stringify(textBlocks));
    prevTextBlocks[index] = updatedData;
    setTextBlocks(prevTextBlocks);
  };

  return (
    <div className="editor">
      <div className="text-blocks">
        {textBlocks.map((item, index) => (
          <EditorElement
            key={item.id}
            focusedDOMId={focusedDOMId}
            setFocusedDOMId={setFocusedDOMId}
            indexValue={index}
            id={item.id}
            content={item.content}
            type={item.type}
            onChangeBlock={handleBlockChange}
            generateBlock={generateBlock}
          />
        ))}
      </div>
    </div>
  );
}

export default Editor;
