import React from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

function Header() {
  return (
    <header>
      <div className="container">
        <h1>
          <NoteAltIcon
            style={{
              marginRight: ".2rem",
              fontSize: "2rem",
              position: "relative",
              top: ".3rem"
            }}
          />
          MEMO
          <span
            style={{
              color: "#a4a7ab",
              fontSize: "1.2rem",
              fontFamily: "Verdana, arial"
            }}
          >
            lite
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
