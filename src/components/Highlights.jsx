import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from "../components/UI/Highlight.jsx";

const Highlights = () => {
  return (
    
    <section id = "highlights">
      <div className = "container">
        <div className = "row">
          <h2 className = "section__title">
            Why choose <span className = "purple">Library</span>
          </h2>
          <div className = "highlight__wrapper">
            <Highlight
              icon = {<FontAwesomeIcon icon = "bolt" />}
              title = "Easy and Quick"
              para = "Get access to the books you purchased online instantly."
            />
            <Highlight
              icon = {<FontAwesomeIcon icon = "book-open" />}
              title = "10,000+ Books"
              para = "Library has books in all your favorite categories and genres."
            />
            <Highlight
              icon = {<FontAwesomeIcon icon = "tags" />}
              title = "Affordable Prices"
              para = "Get your hands on popoular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;