import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function expandArea() {
    setExpanded(true);
  }

  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handlingInput(e) {
    const { value, name } = e.target;

    setInput((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <form>
        {isExpanded && (
          <input
            name="title"
            placeholder="title..."
            onChange={handlingInput}
            value={input.title}
          />
        )}
        <textarea
          onClick={expandArea}
          name="content"
          placeholder={isExpanded ? "content..." : "Click here..."}
          onChange={handlingInput}
          value={input.content}
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded ? true : false}>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.add(input);
              setInput({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
